#!/usr/bin/env python3
import os 
import sys 
from do_recursive import *
from find_replace import *

def renameFile(filepath, oldname, newname):
    filename = os.path.basename(filepath)
    print(filename, oldname)
    print(filename == oldname)

    if filename == oldname:
        print('matched')
        dirname = os.path.dirname(filepath)
        newfilepath = f'{dirname}/{newname}'
        print('newfilepath', newfilepath)
        os.rename(filepath, newfilepath)

if __name__ == "__main__":
    dirname = sys.argv[1]
    oldname = sys.argv[2]
    newname = sys.argv[3]

    do_recursive(dirname, renameFile, oldname, newname)
