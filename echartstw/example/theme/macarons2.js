define({
    // 全圖默認背景
    // backgroundColor: 'rgba(0,0,0,0)',
    
    // 默認色板
    color: ['#ed9678','#e7dac9','#cb8e85','#f3f39d','#c8e49c',
            '#f16d7a','#f3d999','#d3758f','#dcc392','#2e4783',
            '#82b6e9','#ff6347','#a092f1','#0a915d','#eaf889',
            '#6699FF','#ff6666','#3cb371','#d5b158','#38b6b6'],
    
    // 值域
    dataRange: {
        color:['#cb8e85','#e7dac9'],//顏色 
        //text:['高','低'],         // 文本，默認為數值文本
        textStyle: {
            color: '#333'          // 值域文字顏色
        }
    },


    // 柱形圖默認參數
    bar: {
        barMinHeight: 0,          // 最小高度改為0
        // barWidth: null,        // 默認自適應
        barGap: '30%',            // 柱間距離，默認為柱形寬度的30%，可設固定值
        barCategoryGap : '20%',   // 類目間柱形距離，默認為類目間距的20%，可設固定值
        itemStyle: {
            normal: {
                // color: '各異',
                barBorderColor: '#fff',       // 柱條邊線
                barBorderRadius: 0,           // 柱條邊線圓角，單位px，默認為0
                barBorderWidth: 1,            // 柱條邊線線寬，單位px，默認為1
                label: {
                    show: false
                    // position: 默認自適應，水平佈局為'top'，垂直佈局為'right'，可選為
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // 默認使用全局文本樣式，詳見TEXTSTYLE
                }
            },
            emphasis: {
                // color: '各異',
                barBorderColor: 'rgba(0,0,0,0)',   // 柱條邊線
                barBorderRadius: 0,                // 柱條邊線圓角，單位px，默認為0
                barBorderWidth: 1,                 // 柱條邊線線寬，單位px，默認為1
                label: {
                    show: false
                    // position: 默認自適應，水平佈局為'top'，垂直佈局為'right'，可選為
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // 默認使用全局文本樣式，詳見TEXTSTYLE
                }
            }
        }
    },

    // 折線圖默認參數
    line: {
        itemStyle: {
            normal: {
                // color: 各異,
                label: {
                    show: false
                    // position: 默認自適應，水平佈局為'top'，垂直佈局為'right'，可選為
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // 默認使用全局文本樣式，詳見TEXTSTYLE
                },
                lineStyle: {
                    width: 2,
                    type: 'solid',
                    shadowColor : 'rgba(0,0,0,0)', //默認透明
                    shadowBlur: 5,
                    shadowOffsetX: 3,
                    shadowOffsetY: 3
                }
            },
            emphasis: {
                // color: 各異,
                label: {
                    show: false
                    // position: 默認自適應，水平佈局為'top'，垂直佈局為'right'，可選為
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // 默認使用全局文本樣式，詳見TEXTSTYLE
                }
            }
        },
        //smooth : false,
        //symbol: null,         // 拐點圖形類型
        symbolSize: 2,          // 拐點圖形大小
        //symbolRotate : null,  // 拐點圖形旋轉控制
        showAllSymbol: false    // 標誌圖形默認只有主軸顯示（隨主軸標籤間隔隱藏策略）
    },
    
    // K線圖默認參數
    k: {
        // barWidth : null          // 默認自適應
        // barMaxWidth : null       // 默認自適應 
        itemStyle: {
            normal: {
                color: '#fe9778',          // 陽線填充顏色
                color0: '#e7dac9',      // 陰線填充顏色
                lineStyle: {
                    width: 1,
                    color: '#f78766',   // 陽線邊框顏色
                    color0: '#f1ccb8'   // 陰線邊框顏色
                }
            },
            emphasis: {
                // color: 各異,
                // color0: 各異
            }
        }
    },

    // 餅圖默認參數
    pie: {
        center : ['50%', '50%'],    // 默認全局居中
        radius : [0, '75%'],
        clockWise : false,          // 默認逆時針
        startAngle: 90,
        minAngle: 0,                // 最小角度改為0
        selectedOffset: 10,         // 選中是扇區偏移量
        itemStyle: {
            normal: {
                // color: 各異,
                borderColor: '#fff',
                borderWidth: 1,
                label: {
                    show: true,
                    position: 'outer',
                  textStyle: {color: '#1b1b1b'},
                  lineStyle: {color: '#1b1b1b'}
                    // textStyle: null      // 默認使用全局文本樣式，詳見TEXTSTYLE
                },
                labelLine: {
                    show: true,
                    length: 20,
                    lineStyle: {
                        // color: 各異,
                        width: 1,
                        type: 'solid'
                    }
                }
            }
        }
    },
    
    map: {
        mapType: 'china',   // 各省的mapType暫時都用中文
        mapLocation: {
            x : 'center',
            y : 'center'
            // width    // 自適應
            // height   // 自適應
        },
        showLegendSymbol : true,       // 顯示圖例顏色標識（系列標識的小圓點），存在legend時生效
        itemStyle: {
            normal: {
                // color: 各異,
                borderColor: '#fff',
                borderWidth: 1,
                areaStyle: {
                    color: '#ccc'//rgba(135,206,250,0.8)
                },
                label: {
                    show: false,
                    textStyle: {
                        color: 'rgba(139,69,19,1)'
                    }
                }
            },
            emphasis: {                 // 也是選中樣式
                // color: 各異,
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 1,
                areaStyle: {
                    color: '#f3f39d'
                },
                label: {
                    show: false,
                    textStyle: {
                        color: 'rgba(139,69,19,1)'
                    }
                }
            }
        }
    },
    
    force : {
        itemStyle: {
            normal: {
                // color: 各異,
                label: {
                    show: false
                    // textStyle: null      // 默認使用全局文本樣式，詳見TEXTSTYLE
                },
                nodeStyle : {
                    brushType : 'both',
                    strokeColor : '#a17e6e'
                },
                linkStyle : {
                    strokeColor : '#a17e6e'
                }
            },
            emphasis: {
                // color: 各異,
                label: {
                    show: false
                    // textStyle: null      // 默認使用全局文本樣式，詳見TEXTSTYLE
                },
                nodeStyle : {},
                linkStyle : {}
            }
        }
    },

    gauge : {
        axisLine: {            // 坐標軸線
            show: true,        // 默認顯示，屬性show控制顯示與否
            lineStyle: {       // 屬性lineStyle控制線條樣式
                color: [[0.2, '#ed9678'],[0.8, '#e7dac9'],[1, '#cb8e85']], 
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
    }
});
                
