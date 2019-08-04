#!/usr/bin/env python3
import sys 
from do_recursive import *
from file_utils import *

def print_file(filename): 
    filetext = file_to_string(filename)
    print(filetext)
    
if __name__ == "__main__":
    dirname = sys.argv[1]

    do_recursive(dirname, print_file)
