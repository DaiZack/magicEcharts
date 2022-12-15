define(function() {

var theme = {
    // 全圖默認背景
    backgroundColor: '#1b1b1b',

    // 默認色板
    color: [
        '#FE8463','#9BCA63','#FAD860','#60C0DD','#0084C6',
        '#D7504B','#C6E579','#26C0C0','#F0805A','#F4E001',
        '#B5C334'
    ],

    // 圖表標題
    title: {
        textStyle: {
            fontWeight: 'normal',
            color: '#fff'          // 主標題文字顏色
        }
    },

    // 圖例
    legend: {
        textStyle: {
            color: '#ccc'          // 圖例文字顏色
        }
    },

    // 值域
    dataRange: {
        itemWidth: 15,
        color: ['#FFF808','#21BCF9'],
        textStyle: {
            color: '#ccc'          // 值域文字顏色
        }
    },

    toolbox: {
        color : ['#fff', '#fff', '#fff', '#fff'],
        effectiveColor : '#FE8463',
        disableColor: '#666'
    },

    // 提示框
    tooltip: {
        backgroundColor: 'rgba(250,250,250,0.8)',     // 提示背景顏色，默認為透明度為0.7的黑色
        axisPointer : {            // 坐標軸指示器，坐標軸觸發有效
            type : 'line',         // 默認為直線，可選為：'line' | 'shadow'
            lineStyle : {          // 直線指示器樣式設置
                color: '#aaa'
            },
            crossStyle: {
                color: '#aaa'
            },
            shadowStyle : {                     // 陰影指示器樣式設置
                color: 'rgba(200,200,200,0.2)'
            }
        },
        textStyle: {
            color: '#333'
        }
    },

    // 區域縮放控制器
    dataZoom: {
        dataBackgroundColor: '#555',            // 數據背景顏色
        fillerColor: 'rgba(200,200,200,0.2)',   // 填充顏色
        handleColor: '#eee'     // 手柄顏色
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
        },
        axisLabel: {           // 坐標軸文本標籤，詳見axis.axisLabel
            textStyle: {       // 其餘屬性默認使用全局文本樣式，詳見TEXTSTYLE
                color: '#ccc'
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
        axisTick: {            // 坐標軸小標記
            show: false
        },
        axisLabel: {           // 坐標軸文本標籤，詳見axis.axisLabel
            textStyle: {       // 其餘屬性默認使用全局文本樣式，詳見TEXTSTYLE
                color: '#ccc'
            }
        },
        splitLine: {           // 分隔線
            lineStyle: {       // 屬性lineStyle（詳見lineStyle）控制線條樣式
                color: ['#aaa'],
                type: 'dashed'
            }
        },
        splitArea: {           // 分隔區域
            show: false
        }
    },

    polar : {
        name : {
            textStyle: {       // 其餘屬性默認使用全局文本樣式，詳見TEXTSTYLE
                color: '#ccc'
            }
        },
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
        label: {
            textStyle:{
                color: '#ccc'
            }
        },
        lineStyle : {
            color : '#aaa'
        },
        controlStyle : {
            normal : { color : '#fff'},
            emphasis : { color : '#FE8463'}
        },
        symbolSize : 3
    },

    // 折線圖默認參數
    line: {
        smooth : true
    },

    // K線圖默認參數
    k: {
        itemStyle: {
            normal: {
                color: '#FE8463',       // 陽線填充顏色
                color0: '#9BCA63',      // 陰線填充顏色
                lineStyle: {
                    width: 1,
                    color: '#FE8463',   // 陽線邊框顏色
                    color0: '#9BCA63'   // 陰線邊框顏色
                }
            }
        }
    },

    // 雷達圖默認參數
    radar : {
        symbol: 'emptyCircle',    // 圖形類型
        symbolSize:3
        //symbol: null,         // 拐點圖形類型
        //symbolRotate : null,  // 圖形旋轉控制
    },

    pie: {
        itemStyle: {
            normal: {
                borderWidth: 1,
                borderColor : 'rgba(255, 255, 255, 0.5)'
            },
            emphasis: {
                borderWidth: 1,
                borderColor : 'rgba(255, 255, 255, 1)'
            }
        }
    },

    map: {
        itemStyle: {
            normal: {
                borderColor:'rgba(255, 255, 255, 0.5)',
                areaStyle: {
                    color: '#ddd'
                },
                label: {
                    textStyle: {
                        // color: '#ccc'
                    }
                }
            },
            emphasis: {                 // 也是選中樣式
                areaStyle: {
                    color: '#FE8463'
                },
                label: {
                    textStyle: {
                        // color: 'ccc'
                    }
                }
            }
        }
    },

    force : {
        itemStyle: {
            normal: {
                linkStyle : {
                    color : '#fff'
                }
            }
        }
    },

    chord : {
        itemStyle : {
            normal : {
                borderWidth: 1,
                borderColor: 'rgba(228, 228, 228, 0.2)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(228, 228, 228, 0.2)'
                    }
                }
            },
            emphasis : {
                borderWidth: 1,
                borderColor: 'rgba(228, 228, 228, 0.9)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(228, 228, 228, 0.9)'
                    }
                }
            }
        }
    },

    gauge : {
        axisLine: {            // 坐標軸線
            show: true,        // 默認顯示，屬性show控制顯示與否
            lineStyle: {       // 屬性lineStyle控制線條樣式
                color: [[0.2, '#9BCA63'],[0.8, '#60C0DD'],[1, '#D7504B']],
                width: 3,
                shadowColor : '#fff', //默認透明
                shadowBlur: 10
            }
        },
        axisTick: {            // 坐標軸小標記
            length :15,        // 屬性length控制線長
            lineStyle: {       // 屬性lineStyle控制線條樣式
                color: 'auto',
                shadowColor : '#fff', //默認透明
                shadowBlur: 10
            }
        },
        axisLabel: {            // 坐標軸小標記
            textStyle: {       // 屬性lineStyle控制線條樣式
                fontWeight: 'bolder',
                color: '#fff',
                shadowColor : '#fff', //默認透明
                shadowBlur: 10
            }
        },
        splitLine: {           // 分隔線
            length :25,         // 屬性length控制線長
            lineStyle: {       // 屬性lineStyle（詳見lineStyle）控制線條樣式
                width:3,
                color: '#fff',
                shadowColor : '#fff', //默認透明
                shadowBlur: 10
            }
        },
        pointer: {           // 分隔線
            shadowColor : '#fff', //默認透明
            shadowBlur: 5
        },
        title : {
            textStyle: {       // 其餘屬性默認使用全局文本樣式，詳見TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 20,
                fontStyle: 'italic',
                color: '#fff',
                shadowColor : '#fff', //默認透明
                shadowBlur: 10
            }
        },
        detail : {
            shadowColor : '#fff', //默認透明
            shadowBlur: 5,
            offsetCenter: [0, '50%'],       // x, y，單位px
            textStyle: {       // 其餘屬性默認使用全局文本樣式，詳見TEXTSTYLE
                fontWeight: 'bolder',
                color: '#fff'
            }
        }
    },

    funnel : {
        itemStyle: {
            normal: {
                borderColor : 'rgba(255, 255, 255, 0.5)',
                borderWidth: 1
            },
            emphasis: {
                borderColor : 'rgba(255, 255, 255, 1)',
                borderWidth: 1
            }
        }
    },

    textStyle: {
        fontFamily: '微軟雅黑, Arial, Verdana, sans-serif'
    }
};

    return theme;
});