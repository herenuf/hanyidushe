<?php
/**
 * Created by PhpStorm.
 * User: Useker.cn
 * Date: 2017/12/12
 * Time: 16:07
 */
header("Content-type:JSON;charset=utf-8");  //统一输出编码为utf-8
header("Access-Control-Allow-Origin:*");

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $userName = $_POST["userName"];//接受邮箱手机名
    $userPwd = $_POST["userPwd"];//接收邮箱手机密码
    //如果用户名或密码有一个是空的,就不执行逻辑
    if (!empty($userName) || !empty($userPwd)) {



//1.准备 主机名称 用户名,密码,数据库的名称
        $localName = "127.0.0.1";  //主机名称
        $dbName = "root"; // 用户名
        $dbPwd = "8792543WTO"; // 密码
        $dataBase = "bbs";// 数据库的名称
//2.创建连接
        $connection = new mysqli($localName, $dbName, $dbPwd, $dataBase);
//3.设置连接的字符集  保证 你返回的数据 不是乱码
        mysqli_query($connection, "set names utf8");
//4.准备sql语句
        $sql = "SELECT * FROM userinfo1 WHERE mail='".$userName."' AND mailpwd='".$userPwd ."'";//邮箱的查询
		$sql1 = "SELECT * FROM userinfo2 WHERE tell='".$userName."' AND tellpwd='".$userPwd ."'";//手机的查询
//5.执行sql,返回结果
        $result = $connection->query($sql);  // 相当于$connection.query()  -> 点出来的属性
		$result1 = $connection->query($sql1);
		//print_r($result);
        //返回了行数大于1,说明登录成功,有结果
		
		//邮箱
        if ($result->num_rows >= 1||$result1->num_rows >= 1){
			
            $rowsArr=$result->fetch_assoc(); // fetch_assoc() 相当遍历每一行,并且返回的是一个数组  遍历邮箱的数组
			$rowsArr1=$result1->fetch_assoc();//  遍历手机
			
            $resultArr=array();//空的数组,用于返回所有的数据的一个 包裹  接收邮箱还有电话
			
            $arr=array("status"=>1,"msg"=>"登录成功","data"=>$rowsArr||$rowsArr1); // 准备的真实数据 邮箱或者手机
            array_push( $resultArr,$arr);//往包裹里添加真实的数据

            print_r(json_encode($resultArr));//把包裹返回到客户端

        }else{
            //用户名与密码没有匹配得上
            //登录失败
            $resultArr=array();
            $arr=array("status"=>0,"msg"=>"登录失败");
            array_push( $resultArr,$arr);

            print_r(json_encode( $resultArr));


        }
		

        

//6.断开与mysql的连接
        $connection->close();


    }
}
