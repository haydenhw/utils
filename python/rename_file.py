import sys 
from run_bash import *

old_name = sys.argv[1]
new_name = sys.argv[2]

rename_command = f'mv {old_name} {new_name}'

run_bash(rename_command)