# prepend line to two files passed through command line
# make an action template and a mutation template and append each to new files

# arg(const name) filename arg(am or a or m)

import sys

filenames=['actions.types.js', 'mutations.types.js']
const_name = sys.argv[1]
module_name = sys.argv[2]

def prepend_file(filename, text):
        with open(filename, 'r') as original: data = original.read()
        with open(filename, 'w') as modified: modified.write(text + '\n' + data)

def prepend_declaration(const_declaration):
        for file in filenames:
                prepend_file(file, const_declaration)

def get_const_declaration(name):
        uppercase = name.upper()
        return "const {} = '{}';".format(uppercase, uppercase)

def get_mutation_template(name): 
        uppercase = name.upper()
        return '''[{}](state) {{\n}}'''.format(uppercase)

def main():
        module_filename = module_name + '.module.js'
        const_declaration = get_const_declaration(const_name)
        const_import = const_name.upper()
        mutation_template = get_mutation_template(const_name)


        # prepend_declaration(const_declaration)
        # prepend_file(module_filename, const_import)
        prepend_file(module_filename, mutation_template)


main()