#—————————原版—————————————

#!/bin/bash
echo ""
# 输出当前时间
date --date='0 days ago' "+%Y-%m-%d %H:%M:%S"
echo "Start"
# 判断宝塔WebHook参数是否存在
if [ ! -n "$1" ];
then 
          echo "param参数错误"
          echo "End"
          exit
fi
# git项目路径
gitPath="/www/wwwroot/$1"
# git 网址
gitHttp="http://git.xxxxx.com/$1.git"

echo "Web站点路径：$gitPath"

# 判断项目路径是否存在
if [ -d "$gitPath" ]; then
        cd $gitPath
        # 判断是否存在git目录
        if [ ! -d ".git" ]; then
                echo "在该目录下克隆 git"
                git clone $gitHttp gittemp
                mv gittemp/.git .
                rm -rf gittemp
        fi
        # 拉取最新的项目文件
        git reset --hard origin/master
        git pull
        # 设置目录权限
        chown -R www:www $gitPath
        echo "End"
        exit
else
        echo "该项目路径不存在"
        echo "End"
        exit
fi

#——————————修改后————————————

#!/bin/bash
echo ""
# 输出当前时间
date --date='0 days ago' "+%Y-%m-%d %H:%M:%S"
echo "Start"
# 判断宝塔WebHook参数是否存在
if [ ! -n "$1" ];
then 
          echo "param参数错误"
          echo "End"
          exit
fi
# git项目路径
gitPath="/www/wwwroot/$1"
# git 网址
gitHttp="https://github.com/Master-Frank/Frank-Notes.git"

echo "Web站点路径：$gitPath"

# 判断项目路径是否存在
if [ -d "$gitPath" ]; then
        cd $gitPath
        # 判断是否存在git目录
        if [ ! -d ".git" ]; then
                echo "在该目录下克隆 git"
                git clone -b gh-pages $gitHttp gittemp
                mv gittemp/.git .
                rm -rf gittemp
        fi
        # 拉取最新的项目文件
        # git reset --hard origin/master
        # git pull
        # 设置目录权限
        chown -R www:www $gitPath
        echo "End"
        exit
else
        echo "该项目路径不存在"
        echo "End"
        exit
fi