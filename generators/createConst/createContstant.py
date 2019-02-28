#!/usr/bin/env python3

import sys

const_name = sys.argv[1]
file_name = sys.argv[2]

def prepend_file(filename, text):
        with open(filename, 'r') as original: data = original.read()
        with open(filename, 'w') as modified: modified.write(text + '\n' + data)

def get_const_declaration(name):
        uppercase = name.upper()
        return "export const {} = '{}';".format(uppercase, uppercase)

def main():
        module_filename = file_name + 'Constants.js'
        const_declaration = get_const_declaration(const_name)
        prepend_file(module_filename, const_declaration)

main()
