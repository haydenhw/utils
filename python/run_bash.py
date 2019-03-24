#!/usr/bin/env python3
import subprocess
import sys

# command should be wrapped in quotes

def run_bash(bash_command):
    process = subprocess.Popen(bash_command.split(), stdout=subprocess.PIPE)
    output, error = process.communicate()

if __name__ == "__main__":
    bash_command = sys.argv[1]
    run_bash(bash_command)