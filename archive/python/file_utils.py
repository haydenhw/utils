def file_to_string(filehandle): 
    with open(filehandle, 'r') as file:
        filedata = file.read()
        return filedata

def write_file(filehandle, filedata):
        with open(filehandle, 'w') as file:
                file.write(filedata)
