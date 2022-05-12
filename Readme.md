truffle init
truffle compile
truffle migrate
truffle develop


truffle(develop)> migrate
<!--初始化对象-->
truffle(develop)> let instance = await HelloWorld.deployed()

<!--require(msg.value > 1 ether); 判断条件为 msg大于1时的输出-->
truffle(develop)> instance.setMessage("hi KG",{value:web3.utils.toWei("2","ether")})

<!--判断owner 地址的输出-->
truffle(develop)> instance.setMessage("hi KG",{value:web3.utils.toWei("2","ether"),from:accounts[1]})

<!--退出-->
truffle(develop)> .exit 

truffle(develop)> compile
truffle(develop)> migrate --reset

安装 truffle 问题：npm 版本不要高于6
使用 truffle compile 无法编译  可能是因为权限问题 删除 ~/Library/Preferences/truffle-nodejs 后可以使用