import re
import sys
from file_utils import * 

find = sys.argv[1]
replace = sys.argv[2]

filedata = file_to_string('data.txt')

new = re.sub(find, replace, filedata)
print(new)

write_file('data.txt', new)
