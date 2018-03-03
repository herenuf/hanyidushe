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
    // (userName,userPwd,realName,utelPhone,uEmail,uAddress,usex,uIdcard)
	$tell=$_REQUEST["tell"];
	$tellpwd=$_REQUEST["tellpwd"];

    if (!empty($tell) && !empty($tellpwd)) {


//1.准备 主机名,用户名,密码 数据库名称
        $hostName = "localhost";
        $dbName = "root";
        $dbPwd = "8792543WTO";
        $databaeName = "bbs";
//2.创建连接
        $conn = new mysqli($hostName, $dbName, $dbPwd, $databaeName);
//3.设置连接的字符集
        mysqli_query($conn, "set names utf8");
//4.准备sql语句
        $sql = "INSERT INTO userinfo2 (tell,tellpwd) VALUES ('".$tell."','".$tellpwd."')";

//5.执行sql语句
        $result = $conn->query($sql);
//如果  $result 有结果,表示执行成功,没有结果执行失败
        if ($result) {
            //成功
            // 返回 json   [{status:1,msg:"文字描述的状态",data:{}}]   // RESTful API
            $resultArr = array();
            $arr = array("status" => 1, "msg" => "注册成功");
            array_push($resultArr, $arr);
            //print_r("11111");
            print_r(json_encode($resultArr));
            //  [{status:1,msg:""}]
        } else {
            //失败的
            $resultArr = array();
            $arr = array("status" => 0, "msg" => "注册失败");
            array_push($resultArr, $arr);
            print_r(json_encode($resultArr));
        }

//6.关闭连接
        $conn->close();


    }


}







