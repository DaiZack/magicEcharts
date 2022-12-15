define(function() {

var theme = {
    // 默認色板
    color: [
        '#c12e34','#e6b600','#0098d9','#2b821d',
        '#005eaa','#339ca8','#cda819','#32a487'
    ],

    // 圖表標題
    title: {
        textStyle: {
            fontWeight: 'normal'
        }
    },
    
    // 值域
    dataRange: {
        itemWidth: 15,             // 值域圖形寬度，線性漸變水平佈局寬度為該值 * 10
        color:['#1790cf','#a2d4e6']
    },

    // 工具箱
    toolbox: {
        color : ['#06467c','#00613c','#872d2f','#c47630']
    },

    // 提示框
    tooltip: {
        backgroundColor: 'rgba(0,0,0,0.6)'
    },

    // 區域縮放控制器
    dataZoom: {
        dataBackgroundColor: '#dedede',            // 數據背景顏色
        fillerColor: 'rgba(154,217,247,0.2)',   // 填充顏色
        handleColor: '#005eaa'     // 手柄顏色
    },
    
    // 網格
    grid: {
        borderWidth: 0
    },
    
    // 類目軸
    categoryAxis: {
        axisLine: {            // 坐標軸線
            show: false
        },
        axisTick: {            // 坐標軸小標記
            show: false
        }
    },

    // 數值型坐標軸默認參數
    valueAxis: {
        axisLine: {            // 坐標軸線
            show: false
        },
        axisTick: {            // 坐標軸小標記
            show: false
        },
        splitArea: {           // 分隔區域
            show: true,       // 默認不顯示，屬性show控制顯示與否
            areaStyle: {       // 屬性areaStyle（詳見areaStyle）控制區域樣式
                color: ['rgba(250,250,250,0.2)','rgba(200,200,200,0.2)']
            }
        }
    },
    
    timeline : {
        lineStyle : {
            color : '#005eaa'
        },
        controlStyle : {
            normal : { color : '#005eaa'},
            emphasis : { color : '#005eaa'}
        }
    },

    // K線圖默認參數
    k: {
        itemStyle: {
            normal: {
                color: '#c12e34',          // 陽線填充顏色
                color0: '#2b821d',      // 陰線填充顏色
                lineStyle: {
                    width: 1,
                    color: '#c12e34',   // 陽線邊框顏色
                    color0: '#2b821d'   // 陰線邊框顏色
                }
            }
        }
    },
    
    map: {
        itemStyle: {
            normal: {
                areaStyle: {
                    color: '#ddd'
                },
                label: {
                    textStyle: {
                        color: '#c12e34'
                    }
                }
            },
            emphasis: {                 // 也是選中樣式
                areaStyle: {
                    color: '#e6b600'
                },
                label: {
                    textStyle: {
                        color: '#c12e34'
                    }
                }
            }
        }
    },
    
    force : {
        itemStyle: {
            normal: {
                linkStyle : {
                    color : '#005eaa'
                }
            }
        }
    },
    
    chord : {
        itemStyle : {
            normal : {
                borderWidth: 1,
                borderColor: 'rgba(128, 128, 128, 0.5)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(128, 128, 128, 0.5)'
                    }
                }
            },
            emphasis : {
                borderWidth: 1,
                borderColor: 'rgba(128, 128, 128, 0.5)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(128, 128, 128, 0.5)'
                    }
                }
            }
        }
    },
    
    gauge : {
        axisLine: {            // 坐標軸線
            show: true,        // 默認顯示，屬性show控制顯示與否
            lineStyle: {       // 屬性lineStyle控制線條樣式
                color: [[0.2, '#2b821d'],[0.8, '#005eaa'],[1, '#c12e34']], 
                width: 5
            }
        },
        axisTick: {            // 坐標軸小標記
            splitNumber: 10,   // 每份split細分多少段
            length :8,        // 屬性length控制線長
            lineStyle: {       // 屬性lineStyle控制線條樣式
                color: 'auto'
            }
        },
        axisLabel: {           // 坐標軸文本標籤，詳見axis.axisLabel
            textStyle: {       // 其餘屬性默認使用全局文本樣式，詳見TEXTSTYLE
                color: 'auto'
            }
        },
        splitLine: {           // 分隔線
            length : 12,         // 屬性length控制線長
            lineStyle: {       // 屬性lineStyle（詳見lineStyle）控制線條樣式
                color: 'auto'
            }
        },
        pointer : {
            length : '90%',
            width : 3,
            color : 'auto'
        },
        title : {
            textStyle: {       // 其餘屬性默認使用全局文本樣式，詳見TEXTSTYLE
                color: '#333'
            }
        },
        detail : {
            textStyle: {       // 其餘屬性默認使用全局文本樣式，詳見TEXTSTYLE
                color: 'auto'
            }
        }
    },
    
    textStyle: {
        fontFamily: '微軟雅黑, Arial, Verdana, sans-serif'
    }
};

    return theme;
});