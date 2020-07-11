module.exports = {
    apps:[
        {
            name: "server1",
            script:"./back-end/server1.js",
            instances:1,
            exec_watch:["node_modules"],
            watch:true,
        },
        {
            name: "gateway",
            script:"./back-end/gateway.js",
            watch:true,
            ignore_watch:["node_modules"],
            watch:true,
        },
        {
            name: "server2",
            script:"./back-end/server2.js",
            instances:1,
            exec_watch:["node_modules"],
            watch:true,
        },
        {
            name:"server3",
            script:"./back-end/server3.js",
            instances:1,
            ignore_watch:["node_modules"],
            watch:true,
        }
    ]
}