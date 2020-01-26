import os
import sys
from find_replace_recursive import *

def strip_ext(filename):
    split=filename.split('.')
    split.pop()
    return '.'.join(split)


if __name__ == "__main__":
    filename= sys.argv[1]
    newname= sys.argv[2]

    os.rename(filename, newname)