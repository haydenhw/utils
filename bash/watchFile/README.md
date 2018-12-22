Executes up to four commands when specified file is saved

watchFile $ltfileToWatch$gt $ltcommand1$gt $ltcommand2$gt $ltcommand3$gt $ltcommand4$gt

Example:

```sh
watchFile hello.java 'javac hello.java' 'java hello'
```
