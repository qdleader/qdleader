# echart横坐标最后一个刻度左对齐
```js
		xAxis: {
				type: "category",
				boundaryGap: false,
				axisLabel: {
					showMinLabel: true,
					formatter: (() => {
						return (value: string) => {
							const isLast = value === timeArr[timeArr.length - 1];
							const label = isLast ? `{a|${value}}` : value;
							return label;
						};
					})(),
					showMaxLabel: true,
					rich: {
						a: {
							width: 150,
							align: "left"
						}
					},
					interval: 0
				},
				axisPointer: {
					label: {
						show: true
					},
					z: 1,
					lineStyle: {
						color: "#FBAC5E",
						width: 2
					}
				},
				data: timeArr
			},
```