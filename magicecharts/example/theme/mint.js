define({
    // 全圖默認背景
    // backgroundColor: 'rgba(0,0,0,0)',
    
    // 默認色板
    color: ['#8aedd5','#93bc9e','#cef1db','#7fe579','#a6d7c2',
            '#bef0bb','#99e2vb','#94f8a8','#7de5b8','#4dfb70'],

    
    
    // 值域
    dataRange: {
        color:['#93bc92','#bef0bb']
    },

    // K線圖默認參數
    k: {
        // barWidth : null          // 默認自適應
        // barMaxWidth : null       // 默認自適應 
        itemStyle: {
            normal: {
                color: '#8aedd5',          // 陽線填充顏色
                color0: '#7fe579',      // 陰線填充顏色
                lineStyle: {
                    width: 1,
                    color: '#8aedd5',   // 陽線邊框顏色
                    color0: '#7fe579'   // 陰線邊框顏色
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
                    strokeColor : '#49b485'
                },
                linkStyle : {
                    strokeColor : '#49b485'
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
                color: [[0.2, '#93bc9e'],[0.8, '#8aedd5'],[1, '#a6d7c2']], 
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
                
