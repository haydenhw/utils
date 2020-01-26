#!/usr/bin/env python3
import os
import re
import sys
from file_utils import * 


def find_replace(filehandle, find_str, replace_str):
    filedata = file_to_string(filehandle)
    newdata = re.sub(find_str, replace_str, filedata)
    # print(newdata)
    write_file(filehandle, newdata)

if __name__ == "__main__":
    filehandle = sys.argv[1]
    find = sys.argv[2]
    replace = sys.argv[3]

    print(filehandle)
    find_replace(filehandle, find, replace)

