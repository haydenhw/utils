#!/usr/bin/env python3
import os

def do_recursive(rootdir, callback, *args):
    for subdir, dirs, files in os.walk(rootdir):
        for file in files:
            filepath = os.path.join(subdir, file)
            callback(filepath, *args)
