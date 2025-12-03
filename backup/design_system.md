# iVideo 設計系統

## 1. 色彩系統

### 主要色彩
- **Primary**: #1867C0 (24,103,192) - 主藍色
- **Secondary**: #48A5A6 (72,169,166) - 青綠色
- **Accent**: #E83D75 - 粉紅色強調色

### 狀態色彩
- **Success**: #4CAF50 - 成功狀態
- **Error**: #B00020 - 錯誤狀態
- **Warning**: #FB8C00 - 警告狀態
- **Info**: #2196F3 - 資訊狀態

### 中性色彩
- **Gray-50**: #FAFAFA - 最淺灰色
- **Gray-100**: #F5F5F5 - 淺灰色
- **Gray-200**: #EEEEEE - 次淺灰色
- **Gray-300**: #E0E0E0 - 中淺灰色
- **Gray-400**: #BDBDBD - 中灰色
- **Gray-500**: #9E9E9E - 標準灰色
- **Gray-600**: #757575 - 中深灰色
- **Gray-700**: #616161 - 深灰色
- **Gray-800**: #424242 - 次深灰色
- **Gray-900**: #212121 - 最深灰色

### 語義化色彩
- **Background**: #FFFFFF - 背景色
- **Surface**: #FFFFFF - 表面色
- **On-surface**: #212121 - 表面文字色
- **On-primary**: #FFFFFF - 主色上的文字色
- **On-secondary**: #FFFFFF - 次色上的文字色

## 2. 字體系統

### 字體族
- **主要字體**: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

### 字體大小
- **xs**: 0.75rem (12px) - 標註文字
- **sm**: 0.875rem (14px) - 輔助文字
- **base**: 1rem (16px) - 內容文字
- **lg**: 1.125rem (18px) - 小標題
- **xl**: 1.25rem (20px) - 標題
- **2xl**: 1.5rem (24px) - 主標題
- **3xl**: 1.875rem (30px) - 頁面標題
- **4xl**: 2.25rem (36px) - 展示標題
- **5xl**: 3rem (48px) - 英雄標題

### 字重
- **Light**: 300 - 輕量字重
- **Regular**: 400 - 常規字重
- **Medium**: 500 - 中等字重
- **Bold**: 700 - 粗體字重

### 行高
- **Tight**: 1.25 - 緊湊行高（標題用）
- **Normal**: 1.5 - 標準行高（內文用）
- **Relaxed**: 1.75 - 寬鬆行高（長段落用）

## 3. 間距系統

基於 4px 網格系統

### 基礎間距
- **1**: 0.25rem (4px) - 最小間距
- **2**: 0.5rem (8px) - 小間距
- **3**: 0.75rem (12px) - 次小間距
- **4**: 1rem (16px) - 標準間距
- **5**: 1.25rem (20px) - 中大間距
- **6**: 1.5rem (24px) - 大間距
- **8**: 2rem (32px) - 次大間距
- **10**: 2.5rem (40px) - 特大間距
- **12**: 3rem (48px) - 超大間距
- **16**: 4rem (64px) - 最大間距
- **20**: 5rem (80px) - 區塊間距

## 4. 組件設計

### 按鈕
- **高度**: 48px（桌面版）、32px（行動裝置）
- **圓角**: 4px-8px
- **內邊距**: 12px 24px（標準）、8px 16px（小型）、16px 32px（大型）
- **主要按鈕**: Primary 背景色，白色文字
- **次要按鈕**: 透明背景，Primary 邊框和文字
- **強調按鈕**: Accent 背景色，白色文字
- **幽靈按鈕**: 透明背景，灰色文字
- **禁用狀態**: 透明度 0.5，不可點擊

### 卡片
- **���角**: 20px（桌面版）、16px（行動裝置）
- **陰影**: 0 2px 8px rgba(0,0,0,0.06)
- **邊框**: 1px solid rgba(0,0,0,0.05)
- **內邊距**: 2rem
- **懸停效果**: 向上位移 4px，增強陰影

### 表單元素
- **輸入框高度**: 48px
- **圓角**: 8px
- **邊框**: 1px solid #E0E0E0
- **聚焦狀態**: Primary 色邊框，陰影效果
- **錯誤狀態**: Error 色邊框

### 狀態標籤
- **圓角**: 9999px（全圓角）
- **內邊距**: 4px 12px
- **字體大小**: 12px
- **字重**: 500

### 提示框
- **圓角**: 8px
- **內邊距**: 16px
- **左邊框**: 4px
- **背景色**: 10% 透明度的狀態色

## 5. 佈局系統

### 容器
- **最大寬度**: 1280px
- **內邊距**: 0 16px
- **響應式最大寬度**:
  - Small: 640px
  - Medium: 768px
  - Large: 1024px
  - Extra Large: 1280px
  - 2X Large: 1536px

### 響應式斷點
- **xs**: 0px - 手機直式
- **sm**: 600px - 手機橫式
- **md**: 960px - 平板
- **lg**: 1280px - 桌面
- **xl**: 1920px - 大型桌面

### 網格系統
- **欄位數**: 12 欄網格
- **間隙**: 0.75rem-2rem
- **常用佈局**:
  - 2 欄：grid-template-columns: repeat(2, 1fr)
  - 3 欄：grid-template-columns: repeat(3, 1fr)
  - 4 欄：grid-template-columns: repeat(4, 1fr)

## 6. 視覺效果

### 陰影系統
- **小陰影**: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
- **基礎陰影**: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)
- **中等陰影**: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
- **大陰影**: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
- **特大陰影**: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)

### 圓角系統
- **小圓角**: 0.25rem (4px)
- **基礎圓角**: 0.5rem (8px)
- **大圓角**: 0.75rem (12px)
- **特大圓角**: 1rem (16px)
- **全圓角**: 9999px

### 動畫和過渡
- **快速過渡**: 150ms ease-in-out - 按鈕懸停等微交互
- **基礎過渡**: 250ms ease-in-out - 一般動畫效果
- **慢速過渡**: 350ms ease-in-out - 頁面切換等大型動畫
- **常用動畫**:
  - 淡入：fadeIn 0.5s ease-out
  - 懸停位移：translateY(-2px)
  - 卡片懸停：translateY(-4px)

## 7. 圖標系統

### Material Design Icons
- **圖標來源**: Google Material Icons
- **預設大小**: 24px
- **可用大小**: 16px-48px
- **顏色**: 繼承文字顏色或使用主題色
- **常用圖標**:
  - 導航：home, search, menu, arrow_back, arrow_forward
  - 媒體：play_arrow, pause, stop, volume_up, fullscreen
  - 操作：add, edit, delete, download, upload, share
  - 狀態：check_circle, error, warning, info
  - 社交：thumb_up, thumb_down, bookmark, favorite

### 使用規範
- **最小點擊區域**: 48px × 48px
- **間距**: 圖標與文字間距 8px
- **對齊**: 與文字垂直居中對齊
- **一致性**: 相同功能使用相同圖標