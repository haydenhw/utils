def sum():
    return 7

def print_args(one, *args):
    res = sum(*args)
    print(res)


print_args('one')