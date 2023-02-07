## Mac OS设置JAVA_HOME环境变量





获取JAVA的安装路径：

/usr/libexec/java_home -V
添加JAVA_HOME到profile

mac下编辑profile：

vi ~/.bash_profile
添加环境变量 

JAVA_HOME="/Library/Java/JavaVirtualMachines/jdk1.8.0_111.jdk/Contents/Home"
export JAVA_HOME
PATH=$PATH:$JAVA_HOME/bin
export PATH
保存并生效

source ~/.bash_profile
