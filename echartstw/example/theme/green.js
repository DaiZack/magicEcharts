define(function() {

var theme = {
    // 默認色板
    color: [
        '#408829','#68a54a','#a9cba2','#86b379',
        '#397b29','#8abb6f','#759c6a','#bfd3b7'
    ],

    // 圖表標題
    title: {
        textStyle: {
            fontWeight: 'normal',
            color: '#408829'
        }
    },
    
    // 值域
    dataRange: {
        color:['#1f610a','#97b58d']
    },

    // 工具箱
    toolbox: {
        color : ['#408829','#408829','#408829','#408829']
    },

    // 提示框
    tooltip: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        axisPointer : {            // 坐標軸指示器，坐標軸觸發有效
            type : 'line',         // 默認為直線，可選為：'line' | 'shadow'
            lineStyle : {          // 直線指示器樣式設置
                color: '#408829',
                type: 'dashed'
            },
            crossStyle: {
                color: '#408829'
            },
            shadowStyle : {                     // 陰影指示器樣式設置
                color: 'rgba(200,200,200,0.3)'
            }
        }
    },

    // 區域縮放控制器
    dataZoom: {
        dataBackgroundColor: '#eee',            // 數據背景顏色
        fillerColor: 'rgba(64,136,41,0.2)',   // 填充顏色
        handleColor: '#408829'     // 手柄顏色
    },
    
    // 網格
    grid: {
        borderWidth: 0
    },

    // 類目軸
    categoryAxis: {
        axisLine: {            // 坐標軸線
            lineStyle: {       // 屬性lineStyle控制線條樣式
                color: '#408829'
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
                color: '#408829'
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

    timeline : {
        lineStyle : {
            color : '#408829'
        },
        controlStyle : {
            normal : { color : '#408829'},
            emphasis : { color : '#408829'}
        }
    },

    // K線圖默認參數
    k: {
        itemStyle: {
            normal: {
                color: '#68a54a',          // 陽線填充顏色
                color0: '#a9cba2',      // 陰線填充顏色
                lineStyle: {
                    width: 1,
                    color: '#408829',   // 陽線邊框顏色
                    color0: '#86b379'   // 陰線邊框顏色
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
                    color: '#99d2dd'
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
                    color : '#408829'
                }
            }
        }
    },
    
    chord : {
        padding : 4,
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
                color: [[0.2, '#86b379'],[0.8, '#68a54a'],[1, '#408829']], 
                width: 8
            }
        },
        axisTick: {            // 坐標軸小標記
            splitNumber: 10,   // 每份split細分多少段
            length :12,        // 屬性length控制線長
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
            length : 18,         // 屬性length控制線長
            lineStyle: {       // 屬性lineStyle（詳見lineStyle）控制線條樣式
                color: 'auto'
            }
        },
        pointer : {
            length : '90%',
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