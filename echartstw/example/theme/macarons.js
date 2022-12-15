define(function() {

var theme = {
    // 默認色板
    color: [
        '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
        '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
        '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
        '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
    ],

    // 圖表標題
    title: {
        textStyle: {
            fontWeight: 'normal',
            color: '#008acd'          // 主標題文字顏色
        }
    },
    
    // 值域
    dataRange: {
        itemWidth: 15,
        color: ['#5ab1ef','#e0ffff']
    },

    // 工具箱
    toolbox: {
        color : ['#1e90ff', '#1e90ff', '#1e90ff', '#1e90ff'],
        effectiveColor : '#ff4500'
    },

    // 提示框
    tooltip: {
        backgroundColor: 'rgba(50,50,50,0.5)',     // 提示背景顏色，默認為透明度為0.7的黑色
        axisPointer : {            // 坐標軸指示器，坐標軸觸發有效
            type : 'line',         // 默認為直線，可選為：'line' | 'shadow'
            lineStyle : {          // 直線指示器樣式設置
                color: '#008acd'
            },
            crossStyle: {
                color: '#008acd'
            },
            shadowStyle : {                     // 陰影指示器樣式設置
                color: 'rgba(200,200,200,0.2)'
            }
        }
    },

    // 區域縮放控制器
    dataZoom: {
        dataBackgroundColor: '#efefff',            // 數據背景顏色
        fillerColor: 'rgba(182,162,222,0.2)',   // 填充顏色
        handleColor: '#008acd'    // 手柄顏色
    },

    // 網格
    grid: {
        borderColor: '#eee'
    },

    // 類目軸
    categoryAxis: {
        axisLine: {            // 坐標軸線
            lineStyle: {       // 屬性lineStyle控制線條樣式
                color: '#008acd'
            }
        },
        splitLine: {           // 分隔線
            lineStyle: {       // 屬性lineStyle（詳見lineStyle）控制線條樣式
                color: ['#eee']
            }
        }
    },

    // 數值型坐標軸默認參數
    valueAxis: {
        axisLine: {            // 坐標軸線
            lineStyle: {       // 屬性lineStyle控制線條樣式
                color: '#008acd'
            }
        },
        splitArea : {
            show : true,
            areaStyle : {
                color: ['rgba(250,250,250,0.1)','rgba(200,200,200,0.1)']
            }
        },
        splitLine: {           // 分隔線
            lineStyle: {       // 屬性lineStyle（詳見lineStyle）控制線條樣式
                color: ['#eee']
            }
        }
    },

    polar : {
        axisLine: {            // 坐標軸線
            lineStyle: {       // 屬性lineStyle控制線條樣式
                color: '#ddd'
            }
        },
        splitArea : {
            show : true,
            areaStyle : {
                color: ['rgba(250,250,250,0.2)','rgba(200,200,200,0.2)']
            }
        },
        splitLine : {
            lineStyle : {
                color : '#ddd'
            }
        }
    },

    timeline : {
        lineStyle : {
            color : '#008acd'
        },
        controlStyle : {
            normal : { color : '#008acd'},
            emphasis : { color : '#008acd'}
        },
        symbol : 'emptyCircle',
        symbolSize : 3
    },

    // 柱形圖默認參數
    bar: {
        itemStyle: {
            normal: {
                barBorderRadius: 5
            },
            emphasis: {
                barBorderRadius: 5
            }
        }
    },

    // 折線圖默認參數
    line: {
        smooth : true,
        symbol: 'emptyCircle',  // 拐點圖形類型
        symbolSize: 3           // 拐點圖形大小
    },
    
    // K線圖默認參數
    k: {
        itemStyle: {
            normal: {
                color: '#d87a80',       // 陽線填充顏色
                color0: '#2ec7c9',      // 陰線填充顏色
                lineStyle: {
                    color: '#d87a80',   // 陽線邊框顏色
                    color0: '#2ec7c9'   // 陰線邊框顏色
                }
            }
        }
    },
    
    // 散點圖默認參數
    scatter: {
        symbol: 'circle',    // 圖形類型
        symbolSize: 4        // 圖形大小，半寬（半徑）參數，當圖形為方向或菱形則總寬度為symbolSize * 2
    },

    // 雷達圖默認參數
    radar : {
        symbol: 'emptyCircle',    // 圖形類型
        symbolSize:3
        //symbol: null,         // 拐點圖形類型
        //symbolRotate : null,  // 圖形旋轉控制
    },

    map: {
        itemStyle: {
            normal: {
                areaStyle: {
                    color: '#ddd'
                },
                label: {
                    textStyle: {
                        color: '#d87a80'
                    }
                }
            },
            emphasis: {                 // 也是選中樣式
                areaStyle: {
                    color: '#fe994e'
                }
            }
        }
    },
    
    force : {
        itemStyle: {
            normal: {
                linkStyle : {
                    color : '#1e90ff'
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
            lineStyle: {       // 屬性lineStyle控制線條樣式
                color: [[0.2, '#2ec7c9'],[0.8, '#5ab1ef'],[1, '#d87a80']], 
                width: 10
            }
        },
        axisTick: {            // 坐標軸小標記
            splitNumber: 10,   // 每份split細分多少段
            length :15,        // 屬性length控制線長
            lineStyle: {       // 屬性lineStyle控制線條樣式
                color: 'auto'
            }
        },
        splitLine: {           // 分隔線
            length :22,         // 屬性length控制線長
            lineStyle: {       // 屬性lineStyle（詳見lineStyle）控制線條樣式
                color: 'auto'
            }
        },
        pointer : {
            width : 5
        }
    },
    
    textStyle: {
        fontFamily: '微軟雅黑, Arial, Verdana, sans-serif'
    }
};

    return theme;
});