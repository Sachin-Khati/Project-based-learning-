from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend access from different origin (localhost:3000)


def is_safe_state(processes, max_resources, allocated, available):
    n = len(processes)  # Number of processes
    m = len(available)  # Number of resource types

    # Step 1: Calculate Need Matrix = Max - Allocated
    need = []
    for i in range(n):
        row = []
        for j in range(m):
            row.append(max_resources[i][j] - allocated[i][j])
        need.append(row)

    # Step 2: Initialize Work and Finish
    work = available[:]
    finish = [False] * n
    safe_sequence = []

    # Step 3: Try to find a safe sequence
    while len(safe_sequence) < n:
        allocated_any = False
        for i in range(n):
            if not finish[i] and all(need[i][j] <= work[j] for j in range(m)):
                for j in range(m):
                    work[j] += allocated[i][j]
                finish[i] = True
                safe_sequence.append(processes[i])
                allocated_any = True
                break  # Go back to start for the next process

        if not allocated_any:
            return {"safe": False, "safe_sequence": "System is not in a safe state!"}

    return {"safe": True, "safe_sequence": safe_sequence}


@app.route("/check_safe_state", methods=["POST"])
def check_safe():
    try:
        data = request.json
        processes = data["processes"]
        max_resources = data["max_resources"]
        allocated = data["allocated"]
        available = data["available"]

        result = is_safe_state(processes, max_resources, allocated, available)
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
