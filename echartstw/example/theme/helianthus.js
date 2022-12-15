define(function() {
var theme = {
    backgroundColor: '#F2F2E6',
    // 默認色板
    color: [
        '#44B7D3','#E42B6D','#F4E24E','#FE9616','#8AED35',
        '#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0',
        '#E95569','#ff6347','#7b68ee','#00fa9a','#ffd700',
        '#6699FF','#ff6666','#3cb371','#b8860b','#30e0e0'
    ],

    // 圖表標題
    title: {
        backgroundColor: '#F2F2E6',
        itemGap: 10,               // 主副標題縱向間隔，單位px，默認為10，
        textStyle: {
            color: '#8A826D'          // 主標題文字顏色
        },
        subtextStyle: {
            color: '#E877A3'          // 副標題文字顏色
        }
    },

    // 值域
    dataRange: {
        x:'right',
        y:'center',
        itemWidth: 5,
        itemHeight:25,
        color:['#E42B6D','#F9AD96'],
        text:['高','低'],         // 文本，默認為數值文本
        textStyle: {
            color: '#8A826D'          // 值域文字顏色
        }
    },

    toolbox: {
        color : ['#E95569','#E95569','#E95569','#E95569'],
        effectiveColor : '#ff4500',
        itemGap: 8
    },

    // 提示框
    tooltip: {
        backgroundColor: 'rgba(138,130,109,0.7)',     // 提示背景顏色，默認為透明度為0.7的黑色
        axisPointer : {            // 坐標軸指示器，坐標軸觸發有效
            type : 'line',         // 默認為直線，可選為：'line' | 'shadow'
            lineStyle : {          // 直線指示器樣式設置
                color: '#6B6455',
                type: 'dashed'
            },
            crossStyle: {          //十字準星指示器
                color: '#A6A299'
            },
            shadowStyle : {                     // 陰影指示器樣式設置
                color: 'rgba(200,200,200,0.3)'
            }
        }
    },

    // 區域縮放控制器
    dataZoom: {
        dataBackgroundColor: 'rgba(130,197,209,0.6)',            // 數據背景顏色
        fillerColor: 'rgba(233,84,105,0.1)',   // 填充顏色
        handleColor: 'rgba(107,99,84,0.8)'     // 手柄顏色
    },

    // 網格
    grid: {
        borderWidth:0
    },

    // 類目軸
    categoryAxis: {
        axisLine: {            // 坐標軸線
            lineStyle: {       // 屬性lineStyle控制線條樣式
                color: '#6B6455'
            }
        },
        splitLine: {           // 分隔線
            show: false
        }
    },

    // 數值型坐標軸默認參數
    valueAxis: {
        axisLine: {            // 坐標軸線
            show: false
        },
        splitArea : {
            show: false
        },
        splitLine: {           // 分隔線
            lineStyle: {       // 屬性lineStyle（詳見lineStyle）控制線條樣式
                color: ['#FFF'],
                type: 'dashed'
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
            color : '#6B6455'
        },
        controlStyle : {
            normal : { color : '#6B6455'},
            emphasis : { color : '#6B6455'}
        },
        symbol : 'emptyCircle',
        symbolSize : 3
    },

    // 柱形圖默認參數
    bar: {
        itemStyle: {
            normal: {
                barBorderRadius: 0
            },
            emphasis: {
                barBorderRadius: 0
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
                color: '#E42B6D',       // 陽線填充顏色
                color0: '#44B7D3',      // 陰線填充顏色
                lineStyle: {
                    width: 1,
                    color: '#E42B6D',   // 陽線邊框顏色
                    color0: '#44B7D3'   // 陰線邊框顏色
                }
            }
        }
    },

    // 散點圖默認參數
    scatter: {
        itemStyle: {
            normal: {
                borderWidth:1,
                borderColor:'rgba(200,200,200,0.5)'
            },
            emphasis: {
                borderWidth:0
            }
        },
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
                        color: '#E42B6D'
                    }
                }
            },
            emphasis: {                 // 也是選中樣式
                areaStyle: {
                    color: '#fe994e'
                },
                label: {
                    textStyle: {
                        color: 'rgb(100,0,0)'
                    }
                }
            }
        }
    },

    force : {
        itemStyle: {
            normal: {
                nodeStyle : {
                    borderColor : 'rgba(0,0,0,0)'
                },
                linkStyle : {
                    color : '#6B6455'
                }
            }
        }
    },

    chord : {
        itemStyle : {
            normal : {
                chordStyle : {
                    lineStyle : {
                        width : 0,
                        color : 'rgba(128, 128, 128, 0.5)'
                    }
                }
            },
            emphasis : {
                chordStyle : {
                    lineStyle : {
                        width : 1,
                        color : 'rgba(128, 128, 128, 0.5)'
                    }
                }
            }
        }
    },

    gauge : {                  // 儀表盤
        center:['50%','80%'],
        radius:'100%',
        startAngle: 180,
        endAngle : 0,
        axisLine: {            // 坐標軸線
            show: true,        // 默認顯示，屬性show控制顯示與否
            lineStyle: {       // 屬性lineStyle控制線條樣式
                color: [[0.2, '#44B7D3'],[0.8, '#6B6455'],[1, '#E42B6D']],
                width: '40%'
            }
        },
        axisTick: {            // 坐標軸小標記
            splitNumber: 2,   // 每份split細分多少段
            length: 5,        // 屬性length控制線長
            lineStyle: {       // 屬性lineStyle控制線條樣式
                color: '#fff'
            }
        },
        axisLabel: {           // 坐標軸文本標籤，詳見axis.axisLabel
            textStyle: {       // 其餘屬性默認使用全局文本樣式，詳見TEXTSTYLE
                color: '#fff',
                fontWeight:'bolder'
            }
        },
        splitLine: {           // 分隔線
            length: '5%',         // 屬性length控制線長
            lineStyle: {       // 屬性lineStyle（詳見lineStyle）控制線條樣式
                color: '#fff'
            }
        },
        pointer : {
            width : '40%',
            length: '80%',
            color: '#fff'
        },
        title : {
          offsetCenter: [0, -20],       // x, y，單位px
          textStyle: {       // 其餘屬性默認使用全局文本樣式，詳見TEXTSTYLE
            color: 'auto',
            fontSize: 20
          }
        },
        detail : {
            offsetCenter: [0, 0],       // x, y，單位px
            textStyle: {       // 其餘屬性默認使用全局文本樣式，詳見TEXTSTYLE
                color: 'auto',
                fontSize: 40
            }
        }
    },

    textStyle: {
        fontFamily: '微軟雅黑, Arial, Verdana, sans-serif'
    }
};

    return theme;
});
