#!/usr/bin/env python3
import os
import re
import sys
from file_utils import * 

filehandle = os.path.basename(sys.argv[1])
find = sys.argv[2]
replace = sys.argv[3]

filedata = file_to_string(filehandle)
newdata = re.sub(find, replace, filedata)
print(newdata)
write_file(filehandle, newdata)
