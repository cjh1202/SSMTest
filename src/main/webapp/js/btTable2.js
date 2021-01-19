$(function () {

    load();

})

function load() {
    let url="http://localhost:8080/BlogTest/logList"
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
                title:'行号',
                formatter:function(value,row,index){
                    return index+1;
                }

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
                title: '标题',
                field:'headline',
                align:"center",
                halign:"center",
                formatter:function (value,row,index) {
                    return value
                }
            },
            {
                title: '内容',
                field:'content',
                align:"center",
                halign:"center",
                formatter:function (value,row,index) {
                    return value
                }
            },
            {
                title: '时间',
                field:'date',
                align:"center",
                halign:"center",
            },
            {
                title: '主题',
                field:'theme',
                align:"center",
                halign:"center",
            },
            {
                title:'操作',
                formatter:function(value,row,index){
                    let url= 'http://localhost:8080/BlogTest/removeLog/'+index;
                    let deleteRow='<a href="javascript:remove(\''+url+'\')">删除</a>';
                    return deleteRow;
                }
            }
        ]
    })
}