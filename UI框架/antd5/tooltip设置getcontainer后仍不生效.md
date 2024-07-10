# tooltip设置getcontainer后仍不生效

```html
<div className="cluetable-city">
				<span className="cluetable-city-name">创建线索数量</span>
				<Tooltip
					placement="top"
					getPopupContainer={() => document.querySelector(".statistics-tooltip-box") as HTMLElement}
					title="线索来源总数量"
				>
					<i className="iconfont icon-bangzhu icon-bangzhu-city"></i>
				</Tooltip>
			</div>

```



仍不生效


可以


设置父级
```css
.statistics-tooltip-box {
	position: static;
}

```