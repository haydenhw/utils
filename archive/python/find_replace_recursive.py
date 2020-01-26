#!/usr/bin/env python3
import sys 
from do_recursive import *
from find_replace import *

def fr(filepath, find_str, replace_str):
    find_replace(filepath, find_str, replace_str)

if __name__ == "__main__":
    dirname = sys.argv[1]
    find_str = sys.argv[2]
    replace_str = sys.argv[3]

# need to pass find_str and replace string arguments 
# to do recursive
    do_recursive(dirname, fr, find_str, replace_str)
