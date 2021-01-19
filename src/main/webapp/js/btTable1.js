$(function () {

    load();

})

function load() {
    let url="http://localhost:8080/BlogTest/userList"
    $("#myTable").bootstrapTable({
        url:url,
        method:'POST',
        dataType:"JSON",
        striped : true, //是否显示行间隔色
        pageNumber : 1, //初始化加载第一页
        pagination : true,//是否分页
        sidePagination : 'server',//server:服务器端分页|client：前端分页
        pageSize : 2,//单页记录数  告知前端使用者 每页显示多少个
        // showRefresh : true,//刷新按钮

        //查询时携带的参数  data：JSON.stringify()
       queryParams : function(params) {//上传服务器的参数
            var temp = {
                offset :params.offset,// SQL语句起始索引
                pageNumber : params.limit  // 每页显示数量
            };
            return JSON.stringify(temp);
        },
        columns:[
            {
                title:'行号'
            },
            {
                title: '用户名',
                field:'username',
                align:"center",
                halign:"center",
                formatter:function (value,row,index) {
                    return value
                }
            },
            {
                title: '密码',
                field:'password',
                align:"center",
                halign:"center",
                formatter:function (value,row,index) {
                    return value
                }
            },
            {
                title: '邮箱',
                field:'email',
                align:"center",
                halign:"center",
                formatter:function (value,row,index) {
                    return value
                }
            },
            {
                title: '姓名',
                field:'name',
                align:"center",
                halign:"center",
            },
            {
                title: '手机号',
                field:'phone',
                align:"center",
                halign:"center",
            }
        ]
    })
}