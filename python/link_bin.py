#!/usr/bin/env python3
import os
import sys 
from run_bash import *

def link_bin(filename): 
  cwd = os.getcwd()      
  bindir = '/usr/local/bin'
  filepath = cwd + '/' + filename
  linkcmd = f'ln -s {filepath} {bindir}'
  run_bash(linkcmd)

if __name__ == "__main__":
    filename = sys.argv[1]
    link_bin(filename)