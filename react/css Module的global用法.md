css Module的global用法

```css

<div className="noDisplay">1111</div>
/* .playing 会被提升为全局样式 */
  :global(.noDisplay) {
      display:none;
  }


  
<div className={styles.noDisplay}>1111</div>
  /* .playing仍未局部样式，rotate确不会被加上hash */
  .noDisplay :global {
      display:none;
  }


```