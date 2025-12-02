
const INDEX_HTML = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>西安大学生拼车平台</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'KaiTi', 'STKaiti', serif;
      background: linear-gradient(135deg, #f5f0e8 0%, #e8dcc8 100%);
      color: #2c1810;
      line-height: 1.8;
      padding: 20px;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(44, 24, 16, 0.15);
      padding: 40px;
      border: 2px solid #c9a66b;
    }

    h1 {
      text-align: center;
      color: #8b4513;
      font-size: 2.5em;
      margin-bottom: 10px;
      font-weight: normal;
      letter-spacing: 4px;
      border-bottom: 3px double #c9a66b;
      padding-bottom: 20px;
    }

    .subtitle {
      text-align: center;
      color: #a0522d;
      font-size: 1.1em;
      margin-bottom: 30px;
      font-style: italic;
    }

    .notice {
      background: #fff8dc;
      border-left: 4px solid #daa520;
      padding: 15px 20px;
      margin-bottom: 30px;
      border-radius: 4px;
      font-size: 0.95em;
    }

    .notice-title {
      font-weight: bold;
      color: #8b4513;
      margin-bottom: 8px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    label {
      display: block;
      margin-bottom: 8px;
      color: #5d4037;
      font-weight: 500;
    }

    input, select, textarea {
      width: 100%;
      padding: 12px;
      border: 1.5px solid #c9a66b;
      border-radius: 6px;
      font-size: 1em;
      font-family: inherit;
      background: #fefefe;
      transition: all 0.3s ease;
    }

    input:focus, select:focus, textarea:focus {
      outline: none;
      border-color: #8b4513;
      box-shadow: 0 0 8px rgba(139, 69, 19, 0.2);
    }

    /* 日期和时间选择器样式 */
    input[type="date"], input[type="time"] {
      color: #2c1810;
      cursor: pointer;
      font-family: 'KaiTi', 'STKaiti', serif;
    }

    /* 自定义日历图标样式 */
    input[type="date"]::-webkit-calendar-picker-indicator,
    input[type="time"]::-webkit-calendar-picker-indicator {
      cursor: pointer;
      opacity: 0.6;
      transition: opacity 0.3s ease;
      filter: sepia(80%) saturate(150%) hue-rotate(350deg) brightness(0.9);
    }

    input[type="date"]::-webkit-calendar-picker-indicator:hover,
    input[type="time"]::-webkit-calendar-picker-indicator:hover {
      opacity: 1;
    }

    /* 输入框内部样式 - 仅支持Webkit内核浏览器 */
    input[type="date"]::-webkit-datetime-edit,
    input[type="time"]::-webkit-datetime-edit {
      font-family: 'KaiTi', 'STKaiti', serif;
    }

    input[type="date"]::-webkit-datetime-edit-fields-wrapper,
    input[type="time"]::-webkit-datetime-edit-fields-wrapper {
      background: transparent;
    }

    input[type="date"]::-webkit-datetime-edit-text,
    input[type="time"]::-webkit-datetime-edit-text {
      color: #8b4513;
      padding: 0 0.3em;
    }

    input[type="date"]::-webkit-datetime-edit-month-field,
    input[type="date"]::-webkit-datetime-edit-day-field,
    input[type="date"]::-webkit-datetime-edit-year-field,
    input[type="time"]::-webkit-datetime-edit-hour-field,
    input[type="time"]::-webkit-datetime-edit-minute-field {
      color: #2c1810;
      background: transparent;
    }

    input[type="date"]::-webkit-datetime-edit-month-field:focus,
    input[type="date"]::-webkit-datetime-edit-day-field:focus,
    input[type="date"]::-webkit-datetime-edit-year-field:focus,
    input[type="time"]::-webkit-datetime-edit-hour-field:focus,
    input[type="time"]::-webkit-datetime-edit-minute-field:focus {
      background: #fff8dc;
      color: #8b4513;
      outline: none;
      border-radius: 3px;
    }

    /* Firefox日期选择器样式 */
    input[type="date"]::-moz-focus-inner,
    input[type="time"]::-moz-focus-inner {
      border: 0;
    }

    /* 自定义弹出日历样式 - 仅Webkit内核 */
    input[type="date"]::-webkit-calendar-picker-indicator {
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="%238b4513" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/></svg>');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 18px;
      width: 20px;
      height: 20px;
    }

    input[type="time"]::-webkit-calendar-picker-indicator {
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="%238b4513" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/></svg>');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 18px;
      width: 20px;
      height: 20px;
    }

    .school-row {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 15px;
    }

    .datetime-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }

    button {
      width: 100%;
      padding: 14px;
      background: linear-gradient(135deg, #8b4513 0%, #a0522d 100%);
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 1.1em;
      cursor: pointer;
      transition: all 0.3s ease;
      font-family: inherit;
      margin-top: 10px;
      letter-spacing: 2px;
    }

    button:hover {
      background: linear-gradient(135deg, #a0522d 0%, #8b4513 100%);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(139, 69, 19, 0.3);
    }

    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .suggestions {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1.5px solid #c9a66b;
      border-radius: 6px;
      max-height: 200px;
      overflow-y: auto;
      width: 100%;
      z-index: 9999;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      margin-top: 4px;
    }

    .suggestion-item {
      padding: 12px;
      cursor: pointer;
      border-bottom: 1px solid #f0e6d2;
      transition: background 0.2s;
    }

    .suggestion-item:hover,
    .suggestion-item:active {
      background: #fff8dc;
    }

    .suggestion-item:last-child {
      border-bottom: none;
    }

    .suggestion-item small {
      display: block;
      color: #999;
      margin-top: 3px;
      font-size: 0.85em;
    }

    .matches {
      margin-top: 30px;
    }

    .match-card {
      background: #fffaf0;
      border: 1.5px solid #daa520;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 15px;
      transition: all 0.3s ease;
    }

    .match-card:hover {
      box-shadow: 0 4px 16px rgba(218, 165, 32, 0.2);
      transform: translateY(-2px);
    }

    .match-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      padding-bottom: 10px;
      border-bottom: 1px solid #f0e6d2;
    }

    .match-name {
      font-size: 1.2em;
      font-weight: bold;
      color: #8b4513;
    }

    .match-distance {
      background: #daa520;
      color: white;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.9em;
    }

    .match-info {
      line-height: 1.9;
      color: #5d4037;
    }

    .match-contact {
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px dashed #d4af37;
      color: #8b4513;
      font-weight: 500;
    }

    .donate-section {
      margin-top: 50px;
      padding: 30px;
      background: linear-gradient(135deg, #fffaf0 0%, #fff8dc 100%);
      border: 2px solid #c9a66b;
      border-radius: 12px;
    }

    .donate-title {
      text-align: center;
      color: #8b4513;
      font-size: 1.8em;
      margin-bottom: 20px;
      border-bottom: 2px solid #c9a66b;
      padding-bottom: 15px;
    }

    .donate-desc {
      color: #5d4037;
      margin-bottom: 25px;
      line-height: 2;
      text-align: center;
    }

    .qr-container {
      display: flex;
      justify-content: center;
      gap: 40px;
      margin-top: 20px;
      flex-wrap: wrap;
    }

    .qr-item {
      position: relative;
      text-align: center;
    }

    .qr-button {
      padding: 12px 30px;
      background: linear-gradient(135deg, #8b4513 0%, #a0522d 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1.1em;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-family: inherit;
      box-shadow: 0 2px 8px rgba(139, 69, 19, 0.2);
    }

    .qr-button:hover {
      background: linear-gradient(135deg, #a0522d 0%, #8b4513 100%);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(139, 69, 19, 0.3);
    }

    .qr-popup {
      position: absolute;
      bottom: calc(100% + 15px);
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 1000;
      pointer-events: none;
    }

    .qr-item:hover .qr-popup {
      opacity: 1;
      visibility: visible;
      bottom: calc(100% + 20px);
    }

    .qr-popup-inner {
      background: white;
      border: 2px solid #c9a66b;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
      padding: 15px;
      position: relative;
    }

    .qr-popup-inner::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid #c9a66b;
    }

    .qr-popup-label {
      font-weight: bold;
      color: #8b4513;
      margin-bottom: 10px;
      font-size: 1em;
    }

    .qr-image-wrapper {
      width: 250px;
      height: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background: white;
    }

    .qr-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .footer {
      text-align: center;
      margin-top: 40px;
      padding-top: 25px;
      border-top: 2px solid #c9a66b;
      color: #8b4513;
      font-size: 0.9em;
    }

    .heart {
      color: #e74c3c;
      display: inline-block;
      animation: heartbeat 1.5s ease-in-out infinite;
    }

    @keyframes heartbeat {
      0%, 100% {
        transform: scale(1);
      }
      10%, 30% {
        transform: scale(1.1);
      }
      20%, 40% {
        transform: scale(1);
      }
    }

    .runtime {
      margin-top: 10px;
      color: #a0522d;
    }

    .stats {
      display: flex;
      justify-content: center;
      gap: 30px;
      margin-top: 15px;
      flex-wrap: wrap;
    }

    .stat-item {
      color: #a0522d;
    }

    .links {
      margin-top: 20px;
    }

    .links a {
      color: #8b4513;
      text-decoration: none;
      margin: 0 15px;
      transition: color 0.3s;
    }

    .links a:hover {
      color: #daa520;
      text-decoration: underline;
    }

    .loading {
      display: none;
      text-align: center;
      color: #8b4513;
      margin: 20px 0;
    }

    .error {
      background: #ffe4e1;
      border-left: 4px solid #dc143c;
      padding: 15px;
      margin: 15px 0;
      border-radius: 4px;
      color: #8b0000;
    }

    .success {
      background: #f0fff0;
      border-left: 4px solid #228b22;
      padding: 15px;
      margin: 15px 0;
      border-radius: 4px;
      color: #006400;
    }

    .tip {
      background: #e6f3ff;
      border-left: 4px solid #4682b4;
      padding: 12px 15px;
      margin: 15px 0;
      border-radius: 4px;
      font-size: 0.95em;
      color: #2c5282;
    }

    .tabs {
      display: flex;
      gap: 10px;
      margin-bottom: 25px;
      border-bottom: 2px solid #c9a66b;
    }

    .tab {
      padding: 12px 24px;
      background: transparent;
      border: none;
      border-bottom: 3px solid transparent;
      color: #8b4513;
      cursor: pointer;
      font-size: 1.05em;
      font-family: inherit;
      transition: all 0.3s ease;
      margin-bottom: -2px;
    }

    .tab:hover {
      background: rgba(139, 69, 19, 0.05);
    }

    .tab.active {
      border-bottom-color: #8b4513;
      font-weight: bold;
      color: #8b4513;
    }

    .tab-content {
      display: none;
    }

    .tab-content.active {
      display: block;
    }

    .query-result {
      margin-top: 20px;
      padding: 20px;
      background: #fffaf0;
      border: 1.5px solid #daa520;
      border-radius: 8px;
    }

    .stat-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin-top: 15px;
    }

    .stat-box {
      background: white;
      padding: 15px;
      border-radius: 6px;
      border: 1px solid #c9a66b;
      text-align: center;
    }

    .stat-box-value {
      font-size: 2em;
      font-weight: bold;
      color: #8b4513;
      margin-bottom: 5px;
    }

    .stat-box-label {
      color: #5d4037;
      font-size: 0.9em;
    }

    /* Giscus 评论框样式 */
    #comments {
      max-width: 800px;
      margin: 50px auto 0;
      padding: 0;
    }

    #comments .giscus,
    #comments .giscus-frame {
      width: 100% !important;
    }

    /* 自定义日期时间选择器样式 */
    .datetime-picker {
      display: flex;
      gap: 8px;
      align-items: center;
      flex-wrap: nowrap;
    }

    .datetime-picker select {
      padding: 10px 8px;
      border: 2px solid #c9a66b;
      border-radius: 6px;
      background: white;
      color: #5d4037;
      font-size: 0.95em;
      cursor: pointer;
      transition: all 0.3s ease;
      flex: 1;
      min-width: 60px;
    }

    .datetime-picker select:hover {
      border-color: #8b4513;
      box-shadow: 0 0 8px rgba(139, 69, 19, 0.2);
    }

    .datetime-picker select:focus {
      outline: none;
      border-color: #8b4513;
      box-shadow: 0 0 12px rgba(139, 69, 19, 0.3);
    }

    .datetime-picker .date-separator,
    .datetime-picker .time-separator {
      display: flex;
      align-items: center;
      color: #8b4513;
      font-weight: bold;
      padding: 0 4px;
    }

    @media (max-width: 768px) {
      body {
        padding: 10px;
      }

      .container {
        padding: 20px 15px;
        border-width: 1px;
      }

      h1 {
        font-size: 1.5em;
        letter-spacing: 2px;
        padding-bottom: 15px;
      }

      .subtitle {
        font-size: 1em;
        margin-bottom: 20px;
      }

      .notice {
        padding: 12px 15px;
        font-size: 0.9em;
      }

      .notice-title {
        font-size: 1em;
      }

      .school-row, .datetime-row {
        grid-template-columns: 1fr;
        gap: 10px;
      }

      input, select, textarea {
        padding: 10px;
        font-size: 0.95em;
      }

      button {
        padding: 12px;
        font-size: 1em;
        letter-spacing: 1px;
      }

      .tip {
        font-size: 0.85em;
        padding: 10px 12px;
      }

      .match-card {
        padding: 15px;
      }

      .match-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }

      .match-distance {
        align-self: flex-start;
      }

      .match-info {
        font-size: 0.95em;
      }

      .donate-section {
        padding: 20px 15px;
        margin-top: 30px;
      }

      .donate-title {
        font-size: 1.4em;
        margin-bottom: 15px;
      }

      .donate-desc {
        font-size: 0.9em;
        margin-bottom: 20px;
      }

      .qr-container {
        flex-direction: column;
        gap: 15px;
        align-items: center;
      }

      #comments {
        padding: 0 10px;
        margin-top: 30px;
      }

      .datetime-picker {
        flex-wrap: wrap;
      }

      .datetime-picker select {
        font-size: 0.9em;
        padding: 8px 6px;
        min-width: 55px;
      }

      .qr-button {
        font-size: 1em;
        padding: 10px 25px;
      }

      .qr-image-wrapper {
        width: 220px;
        height: 220px;
      }

      .qr-popup {
        bottom: auto;
        top: calc(100% + 15px);
        left: 50%;
        transform: translateX(-50%);
      }

      .qr-item:hover .qr-popup {
        top: calc(100% + 20px);
        bottom: auto;
      }

      .qr-popup-inner::after {
        bottom: auto;
        top: -10px;
        border-top: none;
        border-bottom: 10px solid #c9a66b;
      }

      .footer {
        margin-top: 30px;
        padding-top: 20px;
        font-size: 0.85em;
      }

      .stats {
        flex-direction: column;
        gap: 8px;
      }

      .links {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .links a {
        margin: 0;
        display: block;
      }

      .suggestions {
        max-height: 200px;
        font-size: 0.9em;
        z-index: 99999;
        box-shadow: 0 6px 16px rgba(0,0,0,0.2);
        border-width: 2px;
      }

      .suggestion-item {
        padding: 14px 12px;
        font-size: 1em;
        border-bottom: 1px solid #f0e6d2;
        -webkit-tap-highlight-color: rgba(139, 69, 19, 0.1);
      }

      .suggestion-item:last-child {
        border-bottom: none;
      }

      input[type="text"] {
        font-size: 16px !important;
      }
    }

    @media (max-width: 480px) {
      h1 {
        font-size: 1.3em;
        letter-spacing: 1px;
      }

      .container {
        padding: 15px 10px;
      }

      .notice {
        font-size: 0.85em;
      }

      input, select, textarea, button {
        font-size: 0.9em;
      }

      .match-name {
        font-size: 1.1em;
      }

      .donate-title {
        font-size: 1.2em;
      }

      .qr-button {
        font-size: 0.95em;
        padding: 10px 20px;
      }

      .qr-image-wrapper {
        width: 180px;
        height: 180px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>西安大学生拼车平台</h1>
    <p class="subtitle">同路同行，共享出行</p>

    <div class="notice">
      <div class="notice-title">平台说明</div>
      <p>本平台为西安地区大学生提供免费拼车信息匹配服务，帮助同学们找到同路出行的伙伴，降低出行成本。</p>
      <p style="margin-top: 8px;"><strong>数据保留政策：</strong>行程信息仅保留未来7天（从行程当天起算），7天后数据将自动清理。请勿录入7天后的行程，系统将自动拒绝。</p>
      <p style="margin-top: 8px;"><strong>隐私提示：</strong>只有发布行程的用户才能查看其他人的联系方式，仅查询不会显示联系方式。</p>
      <p style="margin-top: 8px;"><strong>匹配规则：</strong></p>
      <ul style="margin-left: 20px; margin-top: 5px;">
        <li>出发地点距离≤1公里</li>
        <li>目的地距离≤1公里</li>
        <li>出发时间相差≤1小时</li>
        <li>最多显示2个匹配结果</li>
      </ul>
    </div>

    <div class="tabs">
      <button type="button" class="tab active" onclick="switchTab('publish')">发布行程</button>
      <button type="button" class="tab" onclick="switchTab('queryTime')">按时间查询</button>
      <button type="button" class="tab" onclick="switchTab('queryRoute')">按路线查询</button>
      <button type="button" class="tab" onclick="switchTab('myTrips')">我的订单</button>
    </div>

    <div id="publishTab" class="tab-content active">
      <form id="tripForm">
      <div class="form-group">
        <label for="name">姓名 *</label>
        <input type="text" id="name" required placeholder="请输入您的姓名">
      </div>

      <div class="form-group">
        <label>学校 & 校区 *</label>
        <div class="school-row">
          <div style="position: relative;">
            <input type="text" id="school" required placeholder="请选择或输入学校" autocomplete="off">
            <div id="schoolSuggestions" class="suggestions" style="display: none;"></div>
          </div>
          <input type="text" id="campus" placeholder="所在校区（如：长安校区）">
        </div>
      </div>

      <div class="form-group">
        <label for="college">学院（可选）</label>
        <input type="text" id="college" placeholder="请输入学院名称">
      </div>

      <div class="form-group">
        <label>出发日期 *</label>
        <div class="datetime-picker">
          <select id="departureYear" required>
            <option value="">年</option>
          </select>
          <span class="date-separator">-</span>
          <select id="departureMonth" required>
            <option value="">月</option>
          </select>
          <span class="date-separator">-</span>
          <select id="departureDay" required>
            <option value="">日</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label>出发时间 *</label>
        <div class="datetime-picker">
          <select id="departureHour" required>
            <option value="">时</option>
          </select>
          <span class="time-separator">:</span>
          <select id="departureMinute" required>
            <option value="">分</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label for="timeRange">可接受的出发时间范围 *</label>
        <select id="timeRange" required>
          <option value="30">前后30分钟内（推荐，匹配更精确）</option>
          <option value="60">前后1小时内（匹配范围更广）</option>
        </select>
        <small style="color: #666; display: block; margin-top: 5px;">
          例如：您选择14:00出发，选择"前后30分钟"，则会匹配13:30-14:30之间出发的行程
        </small>
      </div>

      <div class="form-group">
        <label for="departure">出发地点 *</label>
        <div style="position: relative;">
          <input type="text" id="departure" required placeholder="请输入出发地点（支持地址搜索）" autocomplete="off">
          <div id="departureSuggestions" class="suggestions" style="display: none;"></div>
        </div>
      </div>

      <div class="form-group">
        <label for="destination">目的地 *</label>
        <div style="position: relative;">
          <input type="text" id="destination" required placeholder="请输入目的地（支持地址搜索）" autocomplete="off">
          <div id="destinationSuggestions" class="suggestions" style="display: none;"></div>
        </div>
      </div>

      <div class="form-group">
        <label for="contact">联系方式 *</label>
        <input type="tel" id="contact" required placeholder="请输入11位手机号" pattern="[0-9]{11}" maxlength="11">
        <small style="color: #666; display: block; margin-top: 5px;">
          请输入11位手机号码，建议开通"可通过手机号查找微信"功能
        </small>
      </div>

      <div class="tip">
        <strong style="color: #d9534f;"> 防刷单规则：</strong>
        <ul style="margin: 10px 0 0 20px; line-height: 1.8;">
          <li>5分钟内最多发布3次行程</li>
          <li>同一手机号1小时内最多发布2次</li>
          <li>同一天、同地点、同时段最多发布5次</li>
          <li>严禁使用脚本刷单，一经发现IP封禁24小时，手机号封禁7天（到期自动解封）</li>
        </ul>
        <p style="margin-top: 10px;">提示：匹配成功后建议优先电话联系，方便快速沟通。</p>
      </div>

      <button type="submit">发布行程并查找拼车</button>
      </form>

      <div id="loading" class="loading">
        <p>正在匹配拼车信息...</p>
      </div>

      <div id="message"></div>

      <div id="matches" class="matches"></div>
    </div>

    <div id="queryTimeTab" class="tab-content">
      <form id="timeQueryForm">
        <div class="form-group">
          <label>查询日期 *</label>
          <div class="datetime-picker">
            <select id="queryYear" required>
              <option value="">年</option>
            </select>
            <span class="date-separator">-</span>
            <select id="queryMonth" required>
              <option value="">月</option>
            </select>
            <span class="date-separator">-</span>
            <select id="queryDay" required>
              <option value="">日</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label>开始时间 *</label>
          <div class="datetime-picker">
            <select id="queryStartHour" required>
              <option value="">时</option>
            </select>
            <span class="time-separator">:</span>
            <select id="queryStartMinute" required>
              <option value="">分</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label>结束时间 *</label>
          <div class="datetime-picker">
            <select id="queryEndHour" required>
              <option value="">时</option>
            </select>
            <span class="time-separator">:</span>
            <select id="queryEndMinute" required>
              <option value="">分</option>
            </select>
          </div>
        </div>

        <button type="submit">查询该时段行程</button>
      </form>

      <div id="timeQueryResult"></div>
    </div>

    <div id="queryRouteTab" class="tab-content">
      <form id="routeQueryForm">
        <div class="form-group">
          <label for="routeStart">出发地点</label>
          <div style="position: relative;">
            <input type="text" id="routeStart" placeholder="例如：西工大长安校区" autocomplete="off">
            <div id="routeStartSuggestions" class="suggestions" style="display: none;"></div>
          </div>
        </div>

        <div class="form-group">
          <label for="routeEnd">目的地</label>
          <div style="position: relative;">
            <input type="text" id="routeEnd" placeholder="例如：航天城地铁站" autocomplete="off">
            <div id="routeEndSuggestions" class="suggestions" style="display: none;"></div>
          </div>
        </div>

        <div class="form-group">
          <label>指定日期（可选）</label>
          <div class="datetime-picker">
            <select id="routeYear">
              <option value="">年</option>
            </select>
            <span class="date-separator">-</span>
            <select id="routeMonth">
              <option value="">月</option>
            </select>
            <span class="date-separator">-</span>
            <select id="routeDay">
              <option value="">日</option>
            </select>
          </div>
        </div>

        <div class="tip">
          提示：可以只填写出发地或目的地，也可以两者都填写进行精确匹配（两点距离各≤1km）
        </div>

        <button type="submit">查询该路线统计</button>
      </form>

      <div id="routeQueryResult"></div>
    </div>

    <div id="myTripsTab" class="tab-content">
      <form id="myTripsForm">
        <div class="form-group">
          <label for="queryUserName">姓名 *</label>
          <input type="text" id="queryUserName" required placeholder="请输入发布行程时填写的姓名" maxlength="20">
        </div>

        <div class="form-group">
          <label for="queryPhone">手机号 *</label>
          <input type="tel" id="queryPhone" required placeholder="请输入11位手机号" pattern="[0-9]{11}" maxlength="11">
        </div>

        <div class="tip">
          提示：输入发布行程时使用的姓名和手机号，可查询您7天内的历史订单。
        </div>

        <button type="submit">查询我的订单</button>
      </form>

      <div id="myTripsResult"></div>
    </div>

    <div class="donate-section">
      <h2 class="donate-title">支持平台运营</h2>
      <div class="donate-desc">
        <p>本平台为公益性质的免费服务，运营费用包括 Cloudflare 服务器费用和高德地图 API 调用费用。</p>
        <p style="margin-top: 10px;">如果您觉得平台对您有帮助，欢迎通过以下方式支持我们：</p>
      </div>
      <div class="qr-container">
        <div class="qr-item">
          <button class="qr-button">微信赞赏</button>
          <div class="qr-popup">
            <div class="qr-popup-inner">
              <div class="qr-popup-label">微信扫码赞赏</div>
              <div class="qr-image-wrapper">
                <img src="/images/wechhat.jpg" alt="微信赞赏码" class="qr-image">
              </div>
            </div>
          </div>
        </div>
        <div class="qr-item">
          <button class="qr-button">支付宝赞赏</button>
          <div class="qr-popup">
            <div class="qr-popup-inner">
              <div class="qr-popup-label">支付宝扫码赞赏</div>
              <div class="qr-image-wrapper">
                <img src="/images/alipay.jpg" alt="支付宝赞赏码" class="qr-image">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="comments"></div>

    <div class="footer">
      <div class="stats">
        <span class="stat-item">访客数 (UV)：<span id="totalVisitors">--</span></span>
        <span class="stat-item">访问量 (PV)：<span id="totalPageViews">--</span></span>
      </div>
      <div class="links">
        <a href="stats.html">访客统计详情</a>
        <a href="https://url.hxorz.cn" target="_blank">开发者工具代理加速</a>
        <a href="https://game.hxorz.cn" target="_blank">休闲小游戏</a>
      </div>
      <p style="margin-top: 20px;">© 2025 西安大学生拼车平台 · 让出行更便捷</p>
      <p class="runtime">
        <span class="heart">❤</span>
        本站已坚强运行 <span id="runDays">0</span> 天 <span id="runHours">0</span> 时 <span id="runMinutes">0</span> 分 <span id="runSeconds">0</span> 秒
      </p>
      <p style="margin-top: 10px;">By <a href="https://hxorz.cn" target="_blank" style="color: #8b4513; text-decoration: none;">hxorz</a></p>
    </div>
  </div>

  <script src="https://giscus.app/client.js"
        data-repo="inwpu/dd"
        data-repo-id="R_kgDOQgDKSg"
        data-category="General"
        data-category-id="DIC_kwDOQgDKSs4CzOr6"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async>
  </script>

  <script>
    // 使用当前域名，避免跨域问题
    const API_BASE = window.location.origin;
    const SITE_START_DATE = '2025-12-01 00:00:00'; // 网站开始运行日期，请自行修改

    let currentTripId = null; // 保存用户发布的行程ID
    let userId = null; // 浏览器唯一标识

    // 生成或获取 user_id
    function getOrCreateUserId() {
      let id = localStorage.getItem('carpool_user_id');
      if (!id) {
        id = 'u_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('carpool_user_id', id);
      }
      return id;
    }

    // 生成 user_key（前端版本）
    async function generateUserKey(userIdentifier, phone) {
      const text = \`\${userIdentifier}_\${phone}\`;
      const encoder = new TextEncoder();
      const data = encoder.encode(text);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    // 页面加载时初始化 user_id
    userId = getOrCreateUserId();

    // 网站运行时间计算
    function updateRuntime() {
      const startDate = new Date(SITE_START_DATE);
      const now = new Date();
      const diff = now - startDate;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById('runDays').textContent = days;
      document.getElementById('runHours').textContent = hours;
      document.getElementById('runMinutes').textContent = minutes;
      document.getElementById('runSeconds').textContent = seconds;
    }

    // 每秒更新一次
    updateRuntime();
    setInterval(updateRuntime, 1000);

    // 标签页切换
    function switchTab(tabName) {
      // 隐藏所有标签内容
      document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
      });
      document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
      });

      // 显示选中的标签
      if (tabName === 'publish') {
        document.getElementById('publishTab').classList.add('active');
        document.querySelector('.tab:nth-child(1)').classList.add('active');
      } else if (tabName === 'queryTime') {
        document.getElementById('queryTimeTab').classList.add('active');
        document.querySelector('.tab:nth-child(2)').classList.add('active');
      } else if (tabName === 'queryRoute') {
        document.getElementById('queryRouteTab').classList.add('active');
        document.querySelector('.tab:nth-child(3)').classList.add('active');
      } else if (tabName === 'myTrips') {
        document.getElementById('myTripsTab').classList.add('active');
        document.querySelector('.tab:nth-child(4)').classList.add('active');
      }
    }

    const SCHOOLS = [
      "西北工业大学",
      "西安交通大学",
      "西安电子科技大学",
      "长安大学",
      "陕西师范大学",
      "西北大学",
      "西安建筑科技大学",
      "西安理工大学",
      "西安科技大学",
      "西安工业大学",
      "西安外国语大学",
      "西安石油大学",
      "西安工程大学",
      "西安邮电大学",
      "西安医学院",
      "西安财经大学",
      "西北政法大学",
      "西安体育学院",
      "西安音乐学院",
      "西安美术学院",
      "西安文理学院",
      "西安航空学院",
      "西安培华学院",
      "西安思源学院",
      "西安翻译学院",
      "西京学院",
      "西安欧亚学院",
      "西安外事学院",
      "西安交通工程学院",
      "西安信息职业大学",
      "西安交通职业大学"
    ];

    let selectedDeparture = null;
    let selectedDestination = null;
    let debounceTimerDeparture = null;
    let debounceTimerDestination = null;

    // 学校输入提示
    const schoolInput = document.getElementById('school');
    const schoolSuggestions = document.getElementById('schoolSuggestions');

    schoolInput.addEventListener('input', (e) => {
      const value = e.target.value.trim();
      if (!value) {
        schoolSuggestions.style.display = 'none';
        return;
      }

      const matches = SCHOOLS.filter(school => school.includes(value));
      if (matches.length > 0) {
        window.currentSchoolMatches = matches;
        schoolSuggestions.innerHTML = matches.map((school, index) =>
          \`<div class="suggestion-item" data-school-index="\${index}">\${school}</div>\`
        ).join('');
        schoolSuggestions.style.display = 'block';

        // 使用事件委托绑定点击事件
        setTimeout(() => {
          const items = schoolSuggestions.querySelectorAll('.suggestion-item');
          items.forEach((item, index) => {
            item.onclick = () => {
              schoolInput.value = window.currentSchoolMatches[index];
              schoolSuggestions.style.display = 'none';
            };
          });
        }, 10);
      } else {
        schoolSuggestions.style.display = 'none';
      }
    });

    // 出发地点搜索
    const departureInput = document.getElementById('departure');
    const departureSuggestions = document.getElementById('departureSuggestions');

    departureInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimerDeparture);
      const value = e.target.value.trim();

      if (!value) {
        departureSuggestions.style.display = 'none';
        return;
      }

      debounceTimerDeparture = setTimeout(async () => {
        try {
          const response = await fetch(\`\${API_BASE}/api/search?keywords=\${encodeURIComponent(value)}\`);
          const data = await response.json();

          console.log('出发地搜索结果:', data);

          if (!response.ok) {
            departureSuggestions.innerHTML = \`<div class="suggestion-item" style="color:#d32f2f;cursor:default;">搜索错误：\${data.error || '服务异常'}</div>\`;
            departureSuggestions.style.display = 'block';
            return;
          }

          if (data.tips && data.tips.length > 0) {
            // 保存数据到全局
            window.currentDepartureTips = data.tips;

            departureSuggestions.innerHTML = data.tips.map((tip, index) =>
              \`<div class="suggestion-item" data-tip-index="\${index}">\${tip.name}<br><small style="color:#888">\${tip.district || ''} \${tip.address || ''}</small></div>\`
            ).join('');
            departureSuggestions.style.display = 'block';

            // 使用事件委托绑定点击事件
            setTimeout(() => {
              const items = departureSuggestions.querySelectorAll('.suggestion-item');
              items.forEach((item, index) => {
                item.onclick = () => selectDeparture(window.currentDepartureTips[index]);
              });
            }, 10);
          } else {
            departureSuggestions.innerHTML = '<div class="suggestion-item" style="color:#999;cursor:default;">未找到相关地点，请输入更具体的地址</div>';
            departureSuggestions.style.display = 'block';
          }
        } catch (error) {
          console.error('搜索失败:', error, error.stack);
          departureSuggestions.innerHTML = \`<div class="suggestion-item" style="color:#d32f2f;cursor:default;">网络错误：\${error.message}</div>\`;
          departureSuggestions.style.display = 'block';
        }
      }, 400);
    });

    async function selectDeparture(tip) {
      departureInput.value = tip.name;
      departureSuggestions.style.display = 'none';

      if (tip.location) {
        const [lon, lat] = tip.location.split(',');
        selectedDeparture = { lat: parseFloat(lat), lon: parseFloat(lon), name: tip.name };
      } else {
        try {
          const response = await fetch(\`\${API_BASE}/api/resolve-poi\`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: tip.name })
          });
          const data = await response.json();

          if (data.pois && data.pois.length > 0) {
            const poi = data.pois[0];
            const [lon, lat] = poi.location.split(',');
            selectedDeparture = { lat: parseFloat(lat), lon: parseFloat(lon), name: poi.name };
          }
        } catch (error) {
          console.error('解析位置失败:', error);
        }
      }
    }

    // 目的地搜索
    const destinationInput = document.getElementById('destination');
    const destinationSuggestions = document.getElementById('destinationSuggestions');

    destinationInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimerDestination);
      const value = e.target.value.trim();

      if (!value) {
        destinationSuggestions.style.display = 'none';
        return;
      }

      debounceTimerDestination = setTimeout(async () => {
        try {
          const response = await fetch(\`\${API_BASE}/api/search?keywords=\${encodeURIComponent(value)}\`);
          const data = await response.json();

          console.log('目的地搜索结果:', data);

          if (!response.ok) {
            destinationSuggestions.innerHTML = \`<div class="suggestion-item" style="color:#d32f2f;cursor:default;">搜索错误：\${data.error || '服务异常'}</div>\`;
            destinationSuggestions.style.display = 'block';
            return;
          }

          if (data.tips && data.tips.length > 0) {
            // 保存数据到全局
            window.currentDestinationTips = data.tips;

            destinationSuggestions.innerHTML = data.tips.map((tip, index) =>
              \`<div class="suggestion-item" data-tip-index="\${index}">\${tip.name}<br><small style="color:#888">\${tip.district || ''} \${tip.address || ''}</small></div>\`
            ).join('');
            destinationSuggestions.style.display = 'block';

            // 使用事件委托绑定点击事件
            setTimeout(() => {
              const items = destinationSuggestions.querySelectorAll('.suggestion-item');
              items.forEach((item, index) => {
                item.onclick = () => selectDestination(window.currentDestinationTips[index]);
              });
            }, 10);
          } else {
            destinationSuggestions.innerHTML = '<div class="suggestion-item" style="color:#999;cursor:default;">未找到相关地点，请输入更具体的地址</div>';
            destinationSuggestions.style.display = 'block';
          }
        } catch (error) {
          console.error('搜索失败:', error, error.stack);
          destinationSuggestions.innerHTML = \`<div class="suggestion-item" style="color:#d32f2f;cursor:default;">网络错误：\${error.message}</div>\`;
          destinationSuggestions.style.display = 'block';
        }
      }, 400);
    });

    async function selectDestination(tip) {
      destinationInput.value = tip.name;
      destinationSuggestions.style.display = 'none';

      if (tip.location) {
        const [lon, lat] = tip.location.split(',');
        selectedDestination = { lat: parseFloat(lat), lon: parseFloat(lon), name: tip.name };
      } else {
        try {
          const response = await fetch(\`\${API_BASE}/api/resolve-poi\`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: tip.name })
          });
          const data = await response.json();

          if (data.pois && data.pois.length > 0) {
            const poi = data.pois[0];
            const [lon, lat] = poi.location.split(',');
            selectedDestination = { lat: parseFloat(lat), lon: parseFloat(lon), name: poi.name };
          }
        } catch (error) {
          console.error('解析位置失败:', error);
        }
      }
    }

    // 路线查询的地点搜索
    let selectedRouteStart = null;
    let selectedRouteEnd = null;
    let debounceTimerRouteStart = null;
    let debounceTimerRouteEnd = null;

    const routeStartInput = document.getElementById('routeStart');
    const routeStartSuggestions = document.getElementById('routeStartSuggestions');

    routeStartInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimerRouteStart);
      const value = e.target.value.trim();

      if (!value) {
        routeStartSuggestions.style.display = 'none';
        selectedRouteStart = null;
        return;
      }

      debounceTimerRouteStart = setTimeout(async () => {
        try {
          const response = await fetch(\`\${API_BASE}/api/search?keywords=\${encodeURIComponent(value)}\`);
          const data = await response.json();

          console.log('路线查询-出发地搜索结果:', data);

          if (data.tips && data.tips.length > 0) {
            // 保存数据到全局
            window.currentRouteStartTips = data.tips;

            routeStartSuggestions.innerHTML = data.tips.map((tip, index) =>
              \`<div class="suggestion-item" data-tip-index="\${index}">\${tip.name}<br><small style="color:#888">\${tip.district || ''} \${tip.address || ''}</small></div>\`
            ).join('');
            routeStartSuggestions.style.display = 'block';

            // 使用事件委托绑定点击事件
            setTimeout(() => {
              const items = routeStartSuggestions.querySelectorAll('.suggestion-item');
              items.forEach((item, index) => {
                item.onclick = () => selectRouteStart(window.currentRouteStartTips[index]);
              });
            }, 10);
          } else {
            routeStartSuggestions.innerHTML = '<div class="suggestion-item" style="color:#999;cursor:default;">未找到相关地点，请输入更具体的地址</div>';
            routeStartSuggestions.style.display = 'block';
          }
        } catch (error) {
          console.error('搜索失败:', error, error.stack);
          routeStartSuggestions.innerHTML = \`<div class="suggestion-item" style="color:#d32f2f;cursor:default;">网络错误：\${error.message}</div>\`;
          routeStartSuggestions.style.display = 'block';
        }
      }, 400);
    });

    async function selectRouteStart(tip) {
      routeStartInput.value = tip.name;
      routeStartSuggestions.style.display = 'none';

      if (tip.location) {
        const [lon, lat] = tip.location.split(',');
        selectedRouteStart = { lat: parseFloat(lat), lon: parseFloat(lon), name: tip.name };
      } else {
        try {
          const response = await fetch(\`\${API_BASE}/api/resolve-poi\`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: tip.name })
          });
          const data = await response.json();

          if (data.pois && data.pois.length > 0) {
            const poi = data.pois[0];
            const [lon, lat] = poi.location.split(',');
            selectedRouteStart = { lat: parseFloat(lat), lon: parseFloat(lon), name: poi.name };
          }
        } catch (error) {
          console.error('解析位置失败:', error);
        }
      }
    }

    const routeEndInput = document.getElementById('routeEnd');
    const routeEndSuggestions = document.getElementById('routeEndSuggestions');

    routeEndInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimerRouteEnd);
      const value = e.target.value.trim();

      if (!value) {
        routeEndSuggestions.style.display = 'none';
        selectedRouteEnd = null;
        return;
      }

      debounceTimerRouteEnd = setTimeout(async () => {
        try {
          const response = await fetch(\`\${API_BASE}/api/search?keywords=\${encodeURIComponent(value)}\`);
          const data = await response.json();

          console.log('路线查询-目的地搜索结果:', data);

          if (data.tips && data.tips.length > 0) {
            // 保存数据到全局
            window.currentRouteEndTips = data.tips;

            routeEndSuggestions.innerHTML = data.tips.map((tip, index) =>
              \`<div class="suggestion-item" data-tip-index="\${index}">\${tip.name}<br><small style="color:#888">\${tip.district || ''} \${tip.address || ''}</small></div>\`
            ).join('');
            routeEndSuggestions.style.display = 'block';

            // 使用事件委托绑定点击事件
            setTimeout(() => {
              const items = routeEndSuggestions.querySelectorAll('.suggestion-item');
              items.forEach((item, index) => {
                item.onclick = () => selectRouteEnd(window.currentRouteEndTips[index]);
              });
            }, 10);
          } else {
            routeEndSuggestions.innerHTML = '<div class="suggestion-item" style="color:#999;cursor:default;">未找到相关地点，请输入更具体的地址</div>';
            routeEndSuggestions.style.display = 'block';
          }
        } catch (error) {
          console.error('搜索失败:', error, error.stack);
          routeEndSuggestions.innerHTML = \`<div class="suggestion-item" style="color:#d32f2f;cursor:default;">网络错误：\${error.message}</div>\`;
          routeEndSuggestions.style.display = 'block';
        }
      }, 400);
    });

    async function selectRouteEnd(tip) {
      routeEndInput.value = tip.name;
      routeEndSuggestions.style.display = 'none';

      if (tip.location) {
        const [lon, lat] = tip.location.split(',');
        selectedRouteEnd = { lat: parseFloat(lat), lon: parseFloat(lon), name: tip.name };
      } else {
        try {
          const response = await fetch(\`\${API_BASE}/api/resolve-poi\`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: tip.name })
          });
          const data = await response.json();

          if (data.pois && data.pois.length > 0) {
            const poi = data.pois[0];
            const [lon, lat] = poi.location.split(',');
            selectedRouteEnd = { lat: parseFloat(lat), lon: parseFloat(lon), name: poi.name };
          }
        } catch (error) {
          console.error('解析位置失败:', error);
        }
      }
    }

    // 关闭建议框
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#school') && !e.target.closest('#schoolSuggestions')) {
        schoolSuggestions.style.display = 'none';
      }
      if (!e.target.closest('#departure') && !e.target.closest('#departureSuggestions')) {
        departureSuggestions.style.display = 'none';
      }
      if (!e.target.closest('#destination') && !e.target.closest('#destinationSuggestions')) {
        destinationSuggestions.style.display = 'none';
      }
      if (!e.target.closest('#routeStart') && !e.target.closest('#routeStartSuggestions')) {
        routeStartSuggestions.style.display = 'none';
      }
      if (!e.target.closest('#routeEnd') && !e.target.closest('#routeEndSuggestions')) {
        routeEndSuggestions.style.display = 'none';
      }
    });

    // 初始化日期时间选择器
    function initDateTimePicker(yearId, monthId, dayId, hourId, minuteId, daysAhead = 7) {
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth() + 1;
      const currentDay = now.getDate();

      // 初始化年份（今年和明年）
      if (yearId) {
        const yearSelect = document.getElementById(yearId);
        for (let year = currentYear; year <= currentYear + 1; year++) {
          const option = document.createElement('option');
          option.value = year;
          option.textContent = year + '年';
          yearSelect.appendChild(option);
        }
        yearSelect.value = currentYear;
      }

      // 初始化月份
      if (monthId) {
        const monthSelect = document.getElementById(monthId);
        for (let month = 1; month <= 12; month++) {
          const option = document.createElement('option');
          option.value = month < 10 ? '0' + month : month;
          option.textContent = month + '月';
          monthSelect.appendChild(option);
        }
        monthSelect.value = currentMonth < 10 ? '0' + currentMonth : currentMonth;
      }

      // 初始化日期
      if (dayId) {
        const updateDays = () => {
          const yearSelect = document.getElementById(yearId);
          const monthSelect = document.getElementById(monthId);
          const daySelect = document.getElementById(dayId);

          const year = parseInt(yearSelect?.value || currentYear);
          const month = parseInt(monthSelect?.value || currentMonth);
          const daysInMonth = new Date(year, month, 0).getDate();

          daySelect.innerHTML = '<option value="">日</option>';
          for (let day = 1; day <= daysInMonth; day++) {
            const option = document.createElement('option');
            option.value = day < 10 ? '0' + day : day;
            option.textContent = day + '日';
            daySelect.appendChild(option);
          }
          daySelect.value = currentDay < 10 ? '0' + currentDay : currentDay;
        };

        if (yearId) document.getElementById(yearId).addEventListener('change', updateDays);
        if (monthId) document.getElementById(monthId).addEventListener('change', updateDays);
        updateDays();
      }

      // 初始化小时
      if (hourId) {
        const hourSelect = document.getElementById(hourId);
        for (let hour = 0; hour < 24; hour++) {
          const option = document.createElement('option');
          option.value = hour < 10 ? '0' + hour : hour;
          option.textContent = hour < 10 ? '0' + hour : hour;
          hourSelect.appendChild(option);
        }
      }

      // 初始化分钟
      if (minuteId) {
        const minuteSelect = document.getElementById(minuteId);
        for (let minute = 0; minute < 60; minute += 5) {
          const option = document.createElement('option');
          option.value = minute < 10 ? '0' + minute : minute;
          option.textContent = minute < 10 ? '0' + minute : minute;
          minuteSelect.appendChild(option);
        }
      }
    }

    // 初始化所有日期时间选择器
    initDateTimePicker('departureYear', 'departureMonth', 'departureDay', 'departureHour', 'departureMinute', 7);
    initDateTimePicker('queryYear', 'queryMonth', 'queryDay', 'queryStartHour', 'queryStartMinute', 7);
    initDateTimePicker(null, null, null, 'queryEndHour', 'queryEndMinute', 7);
    initDateTimePicker('routeYear', 'routeMonth', 'routeDay', null, null, 7);

    // 手机号验证（宽松规则：仅验证11位数字）
    function validatePhone(phone) {
      const phonePattern = /^1[0-9]{10}$/; // 1开头的11位数字
      return phonePattern.test(phone);
    }

    // 表单提交
    document.getElementById('tripForm').addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!selectedDeparture) {
        showMessage('请选择有效的出发地点', 'error');
        return;
      }

      if (!selectedDestination) {
        showMessage('请选择有效的目的地', 'error');
        return;
      }

      // 验证手机号
      const contact = document.getElementById('contact').value.trim();
      if (!validatePhone(contact)) {
        showMessage('请输入正确的11位手机号（1开头）', 'error');
        return;
      }

      // 获取姓名（作为用户标识）
      const name = document.getElementById('name').value.trim();

      // 生成 user_key（使用姓名作为标识）
      const userKey = await generateUserKey(name, contact);

      // 组装日期和时间
      const year = document.getElementById('departureYear').value;
      const month = document.getElementById('departureMonth').value;
      const day = document.getElementById('departureDay').value;
      const hour = document.getElementById('departureHour').value;
      const minute = document.getElementById('departureMinute').value;

      if (!year || !month || !day || !hour || !minute) {
        showMessage('请完整填写出发日期和时间', 'error');
        return;
      }

      const departure_date = \`\${year}-\${month}-\${day}\`;
      const departure_time = \`\${hour}:\${minute}\`;

      const formData = {
        name: document.getElementById('name').value.trim(),
        school: document.getElementById('school').value.trim(),
        campus: document.getElementById('campus').value.trim(),
        college: document.getElementById('college').value.trim(),
        departure_lat: selectedDeparture.lat,
        departure_lon: selectedDeparture.lon,
        departure_location_name: selectedDeparture.name,
        destination_lat: selectedDestination.lat,
        destination_lon: selectedDestination.lon,
        destination_location_name: selectedDestination.name,
        departure_date: departure_date,
        departure_time: departure_time,
        contact: document.getElementById('contact').value.trim(),
        time_range: parseInt(document.getElementById('timeRange').value),
        user_key: userKey,
        user_id: userId
      };

      document.getElementById('loading').style.display = 'block';
      document.getElementById('matches').innerHTML = '';

      try {
        // 创建行程
        const createResponse = await fetch(\`\${API_BASE}/api/create-trip\`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        const createResult = await createResponse.json();

        if (!createResponse.ok) {
          showMessage(createResult.error || '发布失败', 'error');
          document.getElementById('loading').style.display = 'none';
          return;
        }

        // 保存行程ID
        currentTripId = createResult.id;
        showMessage('行程发布成功！正在为您匹配拼车信息...', 'success');

        // 匹配行程（使用trip_id）
        const matchResponse = await fetch(\`\${API_BASE}/api/match\`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            trip_id: currentTripId
          })
        });

        const matchResult = await matchResponse.json();

        if (!matchResponse.ok) {
          showMessage(matchResult.error || '匹配失败', 'error');
          document.getElementById('loading').style.display = 'none';
          return;
        }

        displayMatches(matchResult.matches || [], matchResult.your_trip);

      } catch (error) {
        console.error('提交失败:', error);
        showMessage('网络错误，请稍后重试', 'error');
      } finally {
        document.getElementById('loading').style.display = 'none';
      }
    });

    function displayMatches(matches, yourTrip) {
      const container = document.getElementById('matches');

      // 检查是否有已匹配的订单
      const matchedTrips = matches.filter(match => match.is_matched);
      const unmatchedTrips = matches.filter(match => !match.is_matched);

      // 如果有已匹配的订单，只显示已匹配的
      if (matchedTrips.length > 0) {
        container.innerHTML = \`
          <h2 style="color: #28a745; margin-bottom: 20px; border-bottom: 2px solid #28a745; padding-bottom: 10px;">
            ✓ 您已确认匹配成功
          </h2>
          \${matchedTrips.map(match => \`
            <div class="match-card" style="border: 2px solid #28a745;">
              <div class="match-header">
                <span class="match-name">\${match.name}</span>
                <span class="match-distance">出发地 \${match.departure_distance}km · 目的地 \${match.destination_distance}km</span>
              </div>
              <div class="match-info">
                <div>学校：\${match.school} \${match.campus ? '· ' + match.campus : ''}</div>
                \${match.college ? \`<div>学院：\${match.college}</div>\` : ''}
                <div>出发地：\${match.departure_location_name}</div>
                <div>目的地：\${match.destination_location_name}</div>
                <div>出发时间：\${match.departure_date} \${match.departure_time}</div>
              </div>
              <div class="match-contact" style="background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb;">
                <strong>联系方式：\${match.contact}</strong>
              </div>
            </div>
          \`).join('')}
          <div class="tip" style="background-color: #d4edda; border-color: #c3e6cb;">
            您已成功匹配 \${matchedTrips.length} 个拼车伙伴，请尽快联系对方确认出行细节。其他匹配已自动隐藏。
          </div>
        \`;
        return;
      }

      // 没有已匹配的订单，显示所有未匹配的
      if (unmatchedTrips.length === 0) {
        container.innerHTML = \`
          <div class="tip">
            暂无匹配的拼车信息，您的行程已发布，其他用户可以找到您！
            \${yourTrip ? \`<p style="margin-top: 10px;">您的行程：\${yourTrip.departure} → \${yourTrip.destination} - \${yourTrip.time}</p>\` : ''}
          </div>
        \`;
        return;
      }

      container.innerHTML = \`
        <h2 style="color: #8b4513; margin-bottom: 20px; border-bottom: 2px solid #c9a66b; padding-bottom: 10px;">
          找到 \${unmatchedTrips.length} 个可能的拼车伙伴
        </h2>
        \${unmatchedTrips.map(match => \`
          <div class="match-card">
            <div class="match-header">
              <span class="match-name">\${match.name}</span>
              <span class="match-distance">出发地 \${match.departure_distance}km · 目的地 \${match.destination_distance}km</span>
            </div>
            <div class="match-info">
              <div>学校：\${match.school} \${match.campus ? '· ' + match.campus : ''}</div>
              \${match.college ? \`<div>学院：\${match.college}</div>\` : ''}
              <div>出发地：\${match.departure_location_name}</div>
              <div>目的地：\${match.destination_location_name}</div>
              <div>出发时间：\${match.departure_date} \${match.departure_time}</div>
            </div>
            <div class="match-contact">
              联系方式：\${match.contact}
            </div>
            <button class="confirm-match-btn" data-trip-id="\${match.id}" style="margin-top: 10px; padding: 8px 16px; background-color: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer; width: 100%;">
              确认匹配
            </button>
          </div>
        \`).join('')}
        <div class="tip">
          建议优先电话联系，并开通"可通过手机号查找微信"功能方便添加微信。联系成功后请点击"确认匹配"按钮。
        </div>
      \`;

      // 为确认匹配按钮绑定事件
      container.querySelectorAll('.confirm-match-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const matchedTripId = parseInt(e.target.dataset.tripId);
          if (!currentTripId) {
            showMessage('无法确认匹配，请重新发布行程', 'error');
            return;
          }

          try {
            const response = await fetch(\`\${API_BASE}/api/confirm-match\`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                my_trip_id: currentTripId,
                matched_trip_id: matchedTripId
              })
            });

            const result = await response.json();

            if (!response.ok) {
              showMessage(result.error || '确认匹配失败', 'error');
              return;
            }

            showMessage('匹配确认成功！', 'success');

            // 重新获取匹配结果
            const matchResponse = await fetch(\`\${API_BASE}/api/match\`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ trip_id: currentTripId })
            });

            const matchResult = await matchResponse.json();
            if (matchResponse.ok) {
              displayMatches(matchResult.matches || [], matchResult.your_trip);
            }
          } catch (error) {
            console.error('确认匹配失败:', error);
            showMessage('网络错误，请稍后重试', 'error');
          }
        });
      });
    }

    function showMessage(message, type) {
      const messageDiv = document.getElementById('message');
      messageDiv.className = type;
      messageDiv.textContent = message;
      messageDiv.style.display = 'block';

      setTimeout(() => {
        messageDiv.style.display = 'none';
      }, 5000);
    }

    // 按时间查询
    document.getElementById('timeQueryForm').addEventListener('submit', async (e) => {
      e.preventDefault();

      // 组装日期和时间
      const year = document.getElementById('queryYear').value;
      const month = document.getElementById('queryMonth').value;
      const day = document.getElementById('queryDay').value;
      const startHour = document.getElementById('queryStartHour').value;
      const startMinute = document.getElementById('queryStartMinute').value;
      const endHour = document.getElementById('queryEndHour').value;
      const endMinute = document.getElementById('queryEndMinute').value;

      if (!year || !month || !day || !startHour || !startMinute || !endHour || !endMinute) {
        showMessage('请完整填写查询日期和时间范围', 'error');
        return;
      }

      const date = \`\${year}-\${month}-\${day}\`;
      const startTime = \`\${startHour}:\${startMinute}\`;
      const endTime = \`\${endHour}:\${endMinute}\`;

      // 验证日期在三天内
      const queryDate = new Date(\`\${date}T00:00:00\`);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // 设置为今天0点
      const threeDaysLater = new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000);

      if (queryDate < today) {
        showMessage('只能查询今天及未来三天内的行程', 'error');
        return;
      }

      if (queryDate > threeDaysLater) {
        showMessage('只能查询三天内的行程', 'error');
        return;
      }

      try {
        const response = await fetch(\`\${API_BASE}/api/search-by-time?date=\${date}&start_time=\${startTime}&end_time=\${endTime}\`);
        const data = await response.json();

        if (!response.ok) {
          showMessage(data.error || '查询失败', 'error');
          return;
        }

        displayTimeQueryResult(data);
      } catch (error) {
        console.error('查询失败:', error);
        showMessage('网络错误，请稍后重试', 'error');
      }
    });

    function displayTimeQueryResult(data) {
      const container = document.getElementById('timeQueryResult');

      if (!data || data.total === 0) {
        container.innerHTML = '<div class="tip">该时段暂无行程信息</div>';
        return;
      }

      const schoolList = data.school_distribution ? Object.entries(data.school_distribution)
        .map(([school, count]) => \`<li>\${school}: \${count} 人</li>\`)
        .join('') : '';

      const tripsList = (data.trips && data.trips.length > 0) ? data.trips.map(trip => \`
        <div style="padding: 10px; background: white; margin-bottom: 8px; border-radius: 4px; border: 1px solid #e0d0b0;">
          <div><strong>\${trip.school}</strong> \${trip.campus || ''}</div>
          <div>出发地：\${trip.departure}</div>
          <div>目的地：\${trip.destination}</div>
          <div>出发时间：\${trip.departure_time}</div>
        </div>
      \`).join('') : '<div class="tip">暂无行程数据</div>';

      container.innerHTML = \`
        <div class="query-result">
          <h3 style="color: #8b4513; margin-bottom: 15px;">查询结果</h3>

          <div class="stat-grid">
            <div class="stat-box">
              <div class="stat-box-value">\${data.total}</div>
              <div class="stat-box-label">总行程数</div>
            </div>
          </div>

          <div style="margin-top: 20px;">
            <h4 style="color: #8b4513; margin-bottom: 10px;">学校分布</h4>
            <ul style="line-height: 2; color: #5d4037;">
              \${schoolList}
            </ul>
          </div>

          <div style="margin-top: 20px;">
            <h4 style="color: #8b4513; margin-bottom: 10px;">行程列表（不含联系方式）</h4>
            \${tripsList}
          </div>

          <div class="tip" style="margin-top: 15px;">
            注意：此查询不显示联系方式。如需查看联系方式，请先发布您的行程。
          </div>
        </div>
      \`;
    }

    // 按路线查询
    document.getElementById('routeQueryForm').addEventListener('submit', async (e) => {
      e.preventDefault();

      const startLocationText = document.getElementById('routeStart').value.trim();
      const endLocationText = document.getElementById('routeEnd').value.trim();

      // 组装日期（可选）
      const year = document.getElementById('routeYear').value;
      const month = document.getElementById('routeMonth').value;
      const day = document.getElementById('routeDay').value;
      const date = (year && month && day) ? \`\${year}-\${month}-\${day}\` : null;

      // 至少需要填写一个地点
      if (!startLocationText && !endLocationText) {
        showMessage('请至少填写出发地或目的地', 'error');
        return;
      }

      const requestData = { date: date };

      // 添加出发地坐标（如果选择了）
      if (selectedRouteStart) {
        requestData.start_lat = selectedRouteStart.lat;
        requestData.start_lon = selectedRouteStart.lon;
        requestData.start_location = selectedRouteStart.name;
      } else if (startLocationText) {
        requestData.start_location = startLocationText;
      }

      // 添加目的地坐标（如果选择了）
      if (selectedRouteEnd) {
        requestData.end_lat = selectedRouteEnd.lat;
        requestData.end_lon = selectedRouteEnd.lon;
        requestData.end_location = selectedRouteEnd.name;
      } else if (endLocationText) {
        requestData.end_location = endLocationText;
      }

      try {
        const response = await fetch(\`\${API_BASE}/api/search-by-route\`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestData)
        });

        const data = await response.json();

        if (!response.ok) {
          showMessage(data.error || '查询失败', 'error');
          return;
        }

        displayRouteQueryResult(data);
      } catch (error) {
        console.error('查询失败:', error);
        showMessage('网络错误，请稍后重试', 'error');
      }
    });

    function displayRouteQueryResult(data) {
      const container = document.getElementById('routeQueryResult');

      if (!data || data.total === 0) {
        container.innerHTML = '<div class="tip">该路线暂无行程信息</div>';
        return;
      }

      const timeSlots = data.time_distribution ? Object.entries(data.time_distribution)
        .filter(([_, count]) => count > 0)
        .map(([time, count]) => \`
          <div class="stat-box">
            <div class="stat-box-value">\${count}</div>
            <div class="stat-box-label">\${time}</div>
          </div>
        \`).join('') : '';

      const tripList = (data.trips && data.trips.length > 0) ? data.trips.map(trip => {
        let distanceInfo = '';
        if (trip.departure_distance || trip.destination_distance) {
          const parts = [];
          if (trip.departure_distance) parts.push(\`出发地距离 \${trip.departure_distance}km\`);
          if (trip.destination_distance) parts.push(\`目的地距离 \${trip.destination_distance}km\`);
          distanceInfo = \`<div style="color: #daa520; font-size: 0.9em; margin-top: 5px;">\${parts.join(' · ')}</div>\`;
        }

        return \`
          <div style="padding: 10px; background: white; margin-bottom: 8px; border-radius: 4px; border: 1px solid #e0d0b0;">
            <div><strong>\${trip.school}</strong> \${trip.campus || ''}</div>
            <div>出发地：\${trip.departure}</div>
            <div>目的地：\${trip.destination}</div>
            <div>出发时间：\${trip.departure_time}</div>
            \${distanceInfo}
          </div>
        \`;
      }).join('') : '';

      const routeInfo = data.route ? \`
        <div style="background: white; padding: 15px; border-radius: 6px; margin-bottom: 20px; border: 1px solid #c9a66b;">
          <div><strong>路线：</strong>\${data.route.start} → \${data.route.end}</div>
          <div style="margin-top: 8px;"><strong>日期：</strong>\${data.date || '不限'}</div>
          <div style="margin-top: 8px; color: #8b4513; font-size: 1.1em;">\${data.summary || ''}</div>
        </div>
      \` : '';

      container.innerHTML = \`
        <div class="query-result">
          <h3 style="color: #8b4513; margin-bottom: 15px;">路线统计</h3>

          \${routeInfo}

          <div class="stat-grid">
            \${timeSlots}
          </div>

          \${tripList ? \`
            <div style="margin-top: 20px;">
              <h4 style="color: #8b4513; margin-bottom: 10px;">行程列表（不含联系方式）</h4>
              \${tripList}
            </div>
          \` : ''}

          <div class="tip" style="margin-top: 15px;">
            注意：此查询不显示联系方式。如需查看联系方式，请先发布您的行程。
          </div>
        </div>
      \`;
    }

    // 我的订单查询
    document.getElementById('myTripsForm').addEventListener('submit', async (e) => {
      e.preventDefault();

      const userName = document.getElementById('queryUserName').value.trim();
      const phone = document.getElementById('queryPhone').value.trim();

      if (!userName || !phone) {
        showMessage('请输入姓名和手机号', 'error');
        return;
      }

      if (!validatePhone(phone)) {
        showMessage('请输入正确的11位手机号', 'error');
        return;
      }

      try {
        const response = await fetch(\`\${API_BASE}/api/my-trips\`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user_identifier: userName,
            phone: phone,
            user_id: userId
          })
        });

        const data = await response.json();

        if (!response.ok) {
          showMessage(data.error || '查询失败', 'error');
          return;
        }

        displayMyTrips(data);
      } catch (error) {
        console.error('查询失败:', error);
        showMessage('网络错误，请稍后重试', 'error');
      }
    });

    function displayMyTrips(data) {
      const container = document.getElementById('myTripsResult');

      if (!data || data.total === 0) {
        container.innerHTML = \`
          <div class="tip">
            \${data.message || '暂无订单记录'}
          </div>
        \`;
        return;
      }

      container.innerHTML = \`
        <div class="query-result">
          <h3 style="color: #8b4513; margin-bottom: 15px;">我的订单（共 \${data.total} 条）</h3>

          \${data.trips.map(trip => \`
            <div style="padding: 15px; background: white; margin-bottom: 12px; border-radius: 6px; border: 1px solid #c9a66b; \${trip.is_expired ? 'opacity: 0.7;' : ''}">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <div style="font-weight: bold; color: #8b4513;">订单 #\${trip.id}</div>
                <div style="font-size: 0.9em; color: \${trip.is_expired ? '#999' : '#28a745'};">
                  \${trip.is_expired ? '已过期' : '进行中'}
                </div>
              </div>

              <div style="margin-bottom: 8px;">
                <strong>\${trip.name}</strong> · \${trip.school} \${trip.campus || ''}
              </div>

              <div style="color: #666; margin-bottom: 5px;">
                出发地：\${trip.departure}
              </div>
              <div style="color: #666; margin-bottom: 5px;">
                目的地：\${trip.destination}
              </div>
              <div style="color: #666; margin-bottom: 5px;">
                出发时间：\${trip.departure_date} \${trip.departure_time}
              </div>
              <div style="color: #666; margin-bottom: 5px;">
                联系方式：\${trip.contact}
              </div>

              <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #e0d0b0;">
                <span style="color: #8b4513;">
                  匹配状态：\${trip.match_count > 0 ? \`已确认 \${trip.match_count} 个匹配\` : '暂无匹配'}
                </span>
              </div>
            </div>
          \`).join('')}

          <div class="tip" style="margin-top: 15px;">
            仅显示7天内的订单记录
          </div>
        </div>
      \`;
    }

    // 加载访客统计数据
    async function loadVisitorStats() {
      try {
        const response = await fetch(\`\${API_BASE}/api/stats\`);
        if (response.ok) {
          const data = await response.json();
          document.getElementById('totalVisitors').textContent = data.totalVisitors.toLocaleString();
          document.getElementById('totalPageViews').textContent = data.totalPageViews.toLocaleString();
        }
      } catch (error) {
        console.error('加载访客统计失败:', error);
      }
    }

    // 页面加载时获取统计
    loadVisitorStats();
  </script>
</body>
</html>
`;
const STATS_HTML = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>访客统计 - 西安大学生拼车平台</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'KaiTi', 'STKaiti', serif;
      background: linear-gradient(135deg, #f5f0e8 0%, #e8dcc8 100%);
      color: #2c1810;
      line-height: 1.8;
      padding: 20px;
    }

    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(44, 24, 16, 0.15);
      padding: 40px;
      border: 2px solid #c9a66b;
    }

    h1 {
      text-align: center;
      color: #8b4513;
      font-size: 2.5em;
      margin-bottom: 10px;
      font-weight: normal;
      letter-spacing: 4px;
      border-bottom: 3px double #c9a66b;
      padding-bottom: 20px;
    }

    .back-link {
      display: inline-block;
      margin-bottom: 20px;
      color: #8b4513;
      text-decoration: none;
      font-size: 1.1em;
      transition: color 0.3s;
    }

    .back-link:hover {
      color: #daa520;
    }

    .stats-overview {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin: 30px 0;
    }

    .stat-card {
      background: linear-gradient(135deg, #fff8dc 0%, #fffaf0 100%);
      border: 2px solid #daa520;
      border-radius: 12px;
      padding: 25px;
      text-align: center;
      transition: all 0.3s ease;
    }

    .stat-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(218, 165, 32, 0.3);
    }

    .stat-number {
      font-size: 2.5em;
      font-weight: bold;
      color: #8b4513;
      margin-bottom: 10px;
    }

    .stat-label {
      color: #a0522d;
      font-size: 1.1em;
    }

    .table-container {
      margin-top: 40px;
      overflow-x: auto;
    }

    h2 {
      color: #8b4513;
      margin-bottom: 20px;
      border-bottom: 2px solid #c9a66b;
      padding-bottom: 10px;
      font-size: 1.8em;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    thead {
      background: linear-gradient(135deg, #8b4513 0%, #a0522d 100%);
      color: white;
    }

    th {
      padding: 15px;
      text-align: left;
      font-weight: 500;
      letter-spacing: 1px;
    }

    td {
      padding: 12px 15px;
      border-bottom: 1px solid #f0e6d2;
    }

    tr:hover {
      background: #fff8dc;
    }

    tr:last-child td {
      border-bottom: none;
    }

    .rank {
      font-weight: bold;
      color: #8b4513;
      font-size: 1.1em;
    }

    .rank-1 { color: #ffd700; }
    .rank-2 { color: #c0c0c0; }
    .rank-3 { color: #cd7f32; }

    .loading {
      text-align: center;
      padding: 40px;
      color: #8b4513;
      font-size: 1.2em;
    }

    .error {
      background: #ffe4e1;
      border-left: 4px solid #dc143c;
      padding: 20px;
      margin: 20px 0;
      border-radius: 4px;
      color: #8b0000;
    }


    .footer {
      text-align: center;
      margin-top: 50px;
      padding-top: 25px;
      border-top: 2px solid #c9a66b;
      color: #8b4513;
      font-size: 0.9em;
    }

    .heart {
      color: #e74c3c;
      display: inline-block;
      animation: heartbeat 1.5s ease-in-out infinite;
    }

    @keyframes heartbeat {
      0%, 100% {
        transform: scale(1);
      }
      10%, 30% {
        transform: scale(1.1);
      }
      20%, 40% {
        transform: scale(1);
      }
    }

    .runtime {
      margin-top: 10px;
      color: #a0522d;
    }

    @media (max-width: 768px) {
      .container {
        padding: 25px;
      }

      h1 {
        font-size: 1.8em;
      }

      .stat-number {
        font-size: 2em;
      }

      table {
        font-size: 0.9em;
      }

      th, td {
        padding: 10px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <a href="/" class="back-link">← 返回首页</a>

    <h1>访客统计</h1>

    <div id="loading" class="loading">正在加载统计数据...</div>
    <div id="error" class="error" style="display: none;"></div>

    <div id="statsContent" style="display: none;">
      <div class="stats-overview">
        <div class="stat-card">
          <div class="stat-number" id="totalVisitors">--</div>
          <div class="stat-label">总访客数 (UV)</div>
        </div>
        <div class="stat-card">
          <div class="stat-number" id="totalPageViews">--</div>
          <div class="stat-label">总访问量 (PV)</div>
        </div>
      </div>

      <div class="table-container">
        <h2>访客列表（按访问时间排序）</h2>
        <table>
          <thead>
            <tr>
              <th style="width: 80px;">序号</th>
              <th style="width: 180px;">IP地址</th>
              <th>归属地</th>
              <th style="width: 120px;">访问次数</th>
            </tr>
          </thead>
          <tbody id="locationTable">
          </tbody>
        </table>
      </div>
    </div>

    <div class="footer">
      <p>© 2025 西安大学生拼车平台 · 数据实时更新</p>
      <p class="runtime">
        <span class="heart">❤</span>
        本站已坚强运行 <span id="runDays">0</span> 天 <span id="runHours">0</span> 时 <span id="runMinutes">0</span> 分 <span id="runSeconds">0</span> 秒
      </p>
      <p style="margin-top: 10px;"><a href="/" style="color: #8b4513; text-decoration: none;">返回首页</a></p>
    </div>
  </div>

  <script>
    // 使用当前域名，避免跨域问题
    const API_BASE = window.location.origin;
    const SITE_START_DATE = '2025-12-01 00:00:00'; // 网站开始运行日期，请自行修改

    // 网站运行时间计算
    function updateRuntime() {
      const startDate = new Date(SITE_START_DATE);
      const now = new Date();
      const diff = now - startDate;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById('runDays').textContent = days;
      document.getElementById('runHours').textContent = hours;
      document.getElementById('runMinutes').textContent = minutes;
      document.getElementById('runSeconds').textContent = seconds;
    }

    // 每秒更新一次
    updateRuntime();
    setInterval(updateRuntime, 1000);

    async function loadStats() {
      try {
        const response = await fetch(\`\${API_BASE}/api/stats\`);

        if (!response.ok) {
          throw new Error('加载统计数据失败');
        }

        const data = await response.json();

        document.getElementById('totalVisitors').textContent = data.totalVisitors.toLocaleString();
        document.getElementById('totalPageViews').textContent = data.totalPageViews.toLocaleString();

        const tableBody = document.getElementById('locationTable');
        tableBody.innerHTML = data.topLocations.map((item, index) => {
          const num = index + 1;
          const location = formatLocation(item.city, item.country);

          return \`
            <tr>
              <td class="rank">\${num}</td>
              <td>\${item.ip}</td>
              <td>\${location}</td>
              <td style="text-align: center; font-weight: bold; color: #8b4513;">\${item.count || 0}</td>
            </tr>
          \`;
        }).join('');

        document.getElementById('loading').style.display = 'none';
        document.getElementById('statsContent').style.display = 'block';

      } catch (error) {
        console.error('加载统计失败:', error);
        document.getElementById('loading').style.display = 'none';
        const errorDiv = document.getElementById('error');
        errorDiv.textContent = '加载统计数据失败，请稍后重试';
        errorDiv.style.display = 'block';
      }
    }

    function formatLocation(city, country) {
      if (city && city !== 'Unknown') {
        return \`\${city}, \${country || 'Unknown'}\`;
      }
      return country || 'Unknown';
    }

    // 页面加载时获取统计
    loadStats();

    // 每30秒刷新一次
    setInterval(loadStats, 30000);
  </script>
</body>
</html>
`;

// Base64 encoded images
const WECHAT_IMG_BASE64 = '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAacBNoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwBlFFFeYfjoUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFF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55jcFVppUEnJ9bar/hyGiiiuU+UPfPhP/wAiRZf70n/obVB8X/8AkTn/AOuyfzrnPA3jjSdF8N21jeef58ZcnamRyxP8jUfj7xrpWu+H3s7LzvOMisNyYHBrt54+ztfofePHYf8Asz2XOubkta+t7HmNFFFcZ8GFei/C3QtG161votTtBNPCysG8x1IBB9CPSvOq6XwH4iTw1q8lzPHJLBJEUZExnOQQef8APNXTaUve2PQyypSp4mMq6Th1urrY9Sl+G3h1/uQTR/7szH+ZrS8PeD9I0K5NxZQsbgjaJHcsQO+O1c3/AMLX0r/nxvP/AB3/ABo/4Wxpf/Pjef8Ajv8AjXVzU1sfZQxWUU5KcOVNeX/APRq+a/GF2l74n1K4iIKNMQpHQgcf0rrPE/xMudStJLXTLc2iSAhpGbL49sdK88rKtUUlZHiZ/mtHFqNGi7pO7YUUUVznzAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUgCiiimAUUUUAFFFFIAwKMUUUwCiiigAxRRRQAUUUUAFFFFABRRRQAUYoooAKKKKQBRRRTAKKKKACiiigAooopAFFFFMAooooAKMUUUAFFFFIAooopgFFFFABRRRQAUUUUAFFFFABiiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKQBRRRTAKKKKQBRRRTAKKKKACiiigAooopAFFFFABRRRTAKKKKACiiigAooooAKKKKQBRRRTAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoooo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KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooADXVfC3/ketM/7a/+inrla6r4W/8AI9aZ/wBtf/RT04fEjsy7/fKX+KP5o+ghRQKK9I/VgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK8Q+NH/I2w/wDXon/oTV7fXiHxp/5G2H/r0T/0JqyrfAzweJP9xl6o4I0Cg0CuA/OgooopjCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACuq+Fv/ACPWmf8AbX/0U9crXVfC3/ketM/7a/8Aop6cPiR2Zd/vdL/FH80fQQooFFekfqwUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFeIfGn/kbYf+vRP/AEJq9vrxD40/8jbD/wBeif8AoTVlW+Bng8Sf7jL1RwRoFBoFcB+dBRRRTGFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFdV8Lf+R60z/tr/wCinrla6r4W/wDI9aZ/21/9FPTh8SOzLv8Ae6X+KP5o+ghRQKK9I/VgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK8Q+NP/ACNsP/Xon/oTV7fXiHxp/wCRth/69E/9Casq3wM8HiT/AHGXqjgjQKDQK4D86CiiimMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK6r4W/wDI9aZ/21/9FPXK11Xwt/5HrTP+2v8A6KenD4kdmXf73S/xR/NH0EKKBRXpH6sFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABXiHxp/5G2H/AK9E/wDQmr2+vEPjT/yNsP8A16J/6E1ZVvgZ4PEn+4y9UcEaBQaBXAfnQUUUUxhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABXVfC3/ketM/7a/wDop65Wuq+Fv/I9aZ/21/8ART04fEjsy7/e6X+KP5o+ghRQKK9I/VgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACii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SeNvF/xOvNW8PaJ9s0+SCFFl+1wR5KrgjDuD19q+saKAPj74FfB3x34X+KuhaxruhfZdOtmmMs32uB9u6F1Hyq5J5YDgd6+waKKACvM/2ifDGr+Lvhjd6T4etPteoSTwusXmpHkK2Ty5A6e9emUUAfAX/DPvxO/6Fn/yftf/AI7R/wAM+/E7/oWf/J+1/wDjtfftFAHzD+zB8LvGPgnx/f6l4n0f7DZS6ZJbpJ9qhlzIZYmAwjk9FbnGOK+nqKKACvEf2pfA/iLxx4e0S18L6f8Abp7e6eSVfPji2qUwDl2APPpXt1FAHwF/wz78Tv8AoWf/ACftf/jlfe2nxtFYW0cgw6RKrDrggCp6KAFooooAKKKKACiiigAooooAKKKKACiiigAooooADXiHxp/5G2H/AK9E/wDQmr2814h8af8AkbYf+vRP/QmrKt8DPB4k/wBxfqjgjQKDQK4D86CiiimMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK6r4W/8AI9aZ/wBtf/RT1ytdV8Lf+R60z/tr/wCinpw+JHZl3+90v8UfzR9BCigUV6R+rBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABSUtBoAKKKKAA0lLQaACiiigANJS0GgAooooAKKKKACg0UGgAooooADSUtBoAKKKKAA0lLQaACiiigANJS0GgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAA14h8af+Rth/wCvRP8A0Jq9vNeIfGn/AJG2H/r0T/0JqyrfAzweJP8AcX6o4I0Cg0CuA/OgooopjCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACuq+Fv/ACPWmf8AbX/0U9crXVfC3/ketM/7a/8Aop6cPiR2Zd/vdL/FH80fQQooFFekfqwUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUGig0AFFFFABQaKDQAUUUUAFBooNABRRRQAUUUUAFBooNABRRRQAUGig0AFFFFABQaKDQAUUUUAFBooNABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUABrxD40/8AI2w/9eif+hNXt5rxD40/8jbD/wBeif8AoTVlW+Bng8Sf7i/VHBGgUGgVwH50FFFFMYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAV1Xwt/5HrTP+2v/op65Wuq+Fv/ACPWmf8AbX/0U9OHxI7Mu/3ul/ij+aPoIUUCivSP1YKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiio7ieK2iaW4ljiiXq7sFA/E0ASUVHbzw3Cb7eWOVP7yMGH5ipKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACg0UGgAooooAKDRQaACiiigAoNFBoAKKKKACiiigAoNFBoAKKKKACg0UGgAooooAKDRQaACiiigAoNFBoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigANeIfGn/AJG2H/r0T/0Jq9vNeIfGn/kbYf8Ar0T/ANCasq3wM8HiT/cX6o4I0Cg0CuA/OgooopjCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACuq+Fv/I9aZ/21/8ART1ytdV8Lf8AketM/wC2v/op6cPiR2Zd/vdL/FH80fQQooFFekfqwUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQ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AAgjI9Bzmu40qyTTdLs7GJmaO2hSFWbqQqgAn8qtUUAcr8S/Glp4D8MSazfW1xcoJFhSOADJds43E/dXjr+hrxX9mUS674i8X+O9ckU3LHyvNY4VN3zvjPQBVQD0Fe8eN/Dlr4t8K6jol9xDdxFA+MmNxyrj3DAH8K5H4LfDubwR4JvtG1mW3u5b25llm8okoUZVQLyAei5/E0AfOXhnxV4Pl+K/i7WfGUAvNEvzc/Z4jbmQsWmUoQP4TtB5461N8YvF3gvxxZ6bb+EdD1K21ayVbe3YQIsbQDJ8vYrE8EkjjPX1r3Hwr+z74N0S6e4vop9Yk3lo0vG/doueBtXAY+5z9K9V07TLDTIRFp1lbWkQGAkESxjH0AoA+dfh14z8b6L4Q0zQvDPw0vmS1j2/aLt3RZHJLM/KKBkknGTiuI/aB8ReO73T9J07xzpWl6XFJK11bw2rbpMqNpLEOwx8/t0r7MryL4u/CWT4g+MdAv5b2KDTLSMx3kZ3eY679wCY45yRkkY680Adr8LLdrT4aeFoXG110y33D0JjUkfrXjH7R8knjH4h+EvAmnMWlL+dc7edm/HJ/wB1Fdvoa9w8Y6rN4Y8H31/pemTahNZwgQWduhYseFAwOdozk47A1wfwY8Aahpd9f+MPGREvirVss6HB+yoedo9GPAOOgAA70Aer20MdtbxQQrtjiQIo9ABgCpKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAA14h8af+Rth/69E/8AQmr2814h8af+Rth/69E/9Casq3wM8HiT/cX6o4I0Cg0CuA/OgooopjCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACuq+Fv/I9aZ/21/wDRT1ytdV8Lf+R60z/tr/6KenD4kdmXf73S/wAUfzR9BCigUV6R+rBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVz/hrwfonhm/1S80SyW1n1OUS3JDEhmGegJwoyzHA9a6CigAooooAKKKKACoZrW3nlhkngikkhbdGzoCUPqpPQ/SpqKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooADXiHxp/5G2H/r0T/0Jq9vNeIfGn/kbYf+vRP/AEJqyrfAzweJP9xfqjgjQKDQK4D86CiiimMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK6r4W/wDI9aZ/21/9FPXK11Xwt/5HrTP+2v8A6KenD4kdmXf73S/xR/NH0EKKBRXpH6sFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAAa8Q+NP/ACNsP/Xon/oTV7ea8Q+NP/I2w/8AXon/AKE1ZVvgZ4PEn+4v1RwRoFBoFcB+dBRRRTGFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFdV8Lf+R60z/tr/6KeuVrqvhb/wAj1pn/AG1/9FPTh8SOzLv97pf4o/mj6CFFAor0j9WCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigANeIfGn/AJG2H/r0T/0Jq9vNeIfGn/kbYf8Ar0T/ANCasq3wM8HiT/cX6o4I0Cg0CuA/OgooopjCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACuq+Fv/I9aZ/21/8ART1ytdL8OJhB410xz/fZf++kZf604fEjry92xdJv+aP5o+hxRRRXpH6uFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAAa8Q+NP/I2w/wDXon/oTV7fXhvxkkD+L1AI+S2RT+bH+tZVvgZ4HErSwLT7o4U0Cg0CuA/OwooopjCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAA1NZzyWt3DcRHEkTh1+oORUNFCHFuLutz6c0PU4NY0u3vrY/u5l3Yznae4PuDxWhXz74F8WzeGrp0kVprCY/vIweQf7y+/869y0fVrHWLQXGnXCTxd9vVfYjsa76dRTR+l5VmtPHU1r763X6ryNCiijNaHrBRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjN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KKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACg0UUAFFFFABRRRQAUUUUAFFFFABRRRQAUGiigAooooAKKKKACiiigAooooAKKKKACg0UUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFe16h8LdHnLNZz3FoewB3qPz5/WuX1H4V6rCSbG6t7lR/e/dsfw5H61q6E0e1X4fx1HXl5vR3/wCD+B55zRzW5qHhTXNPci5024wP4o18wfmuaxXRkYqylWHBBGCKzcWtzyatCpSdqkWvVWG0UUUjMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKQBRU1ta3F05S1glmcdVjQsf0rpNO8A+Ib7BFl5CH+Kdwn6df0qlFvY3o4WvXdqUG/RHK0V6lpvwmkbB1LUlQ90gTP8A48f8K2P+FU6P/wA/d7/30v8AhWiozZ6kOHsdNX5UvVo9CoooruP0cKpX+l2GojF9Z29wP+msYb+dXaSgUoqSs1c47Uvh14fvMmO2e1Y/xQuRj8DkfpXN6h8JRydP1M+yTRf1B/pXq1JWbpRfQ82tk+CrfFTXy0/I8Fvvhx4itRmO3huV9YpR/JsVzl9pGo2GftljcwgdWaMhfz6V9O0Vm8PHoeXW4Xw8v4cnH8f8vzPlSivpe98P6TfMTd6baysf4mjGfz61z1/8NdAucmCOa0J7xSE/+hZqJYdrZnl1eFsRH+HNP8P8zwmivVr74S8E2OqH2WaL+oP9K568+GniC3BMUdvc+0coH/oWKzdGa6HmVclxtLWVNv01/I4qita88OaxZki5026UDqVjLD8xxWW6lGIYEEdQRyKhxa3PPqUp03acWn5obRRRSMwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKQBRRRTAKKlt7ae5YrbQyzMOojQsf0rdsPBniG9H7nTJgPWUiP/0Iimot7I2pYarW/hxb9Fc52ivQLL4WavKR9ruLW3X2Jcj8OB+tdFZ/CexQD7XqNzKf+maBB/WrVGbPSpZDjqv2LerS/wCD+B47TkRnYKilmPQAZJr6AsfAXh20wRpyzP8A3pXZ8/gTj9K37LT7SxTbZW0MC+kaBR+laLDvqz0qXCtZ/wASol6Jv/I+edP8Ka7fsBb6Zc/WRfLH5tiujsfhbrMzD7XLbWyd/m3sPwHH617cBRWiw8VuepR4YwsNajcvw/L/ADPNrH4UafHg3l/cTnuEUIP6n9a6XT/BPh+yA8vTInYfxSkyH/x4mukorRU4rZHq0crwlH4Ka/P8yKGGOCMRwosaDoqjAFSUtFWdyVtEGKMUUUDCiiigApKWg0AAoNIKWgBMUUtGKBBR2ooNAwoxRRQAYqpe6fZ3wxeWsM46fvEDfzq3RQTKKkrM5m88C+HLofPpkUZ9YmZP5HFYN38KtJkYm3vLuH0BIYD8xn9a9EoqHTi+hx1MswlX4qa+635Hj178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AUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAYoxRRQAYooooAKKKKACjFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAC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RRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/2WVk+noAAAAA';
const ALIPAY_IMG_BASE64 = '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAZVBDgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6pooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKM0AFFGaM0AFFGaM0AFFGaM0AFFGaM0AFFGaM0AFFGaM0AFFGaM0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFRSyLEhdzhR1NSGvHfjF4ukikbSLF9uR++b+ldWBwc8ZWVKHz8kc+KxCw9PnZo+LPina2Tvb6SouJF48wHK159e/EbXLiQulx5Y/urXGBiFPOSe9JmvvsNkuFoRty3fdnyVXM69Vt3t6HVf8LA1/wD5+3pf+Fga/wD8/bVylJXV/Z2F600Y/XK3WTOs/wCFga//AM/bUf8ACwNf/wCftq5Oin/Z2F/59oPrdX+ZnV/8LA1//n7aj/hYGv8A/P21cr+FJS/s/DfyL7g+t1f5mdX/AMLA1/8A5+2o/wCFga//AM/bVylFH9n4b+RfcH1ur/Mzq/8AhYGv/wDP21H/AAsDX/8An7auUoo/s/DfyL7g+t1f5mdX/wALA1//AJ+2q7Y/EfXoJAzzLIPeuIozUyy3DSVnBfcCxtdO6mz3vwn8T7PUXW31LFvOeN3Y16VG4ZQQQQeh9a+OgxU5U4PqK9s+DXi17tBpF9IWkQZjZj1HpXzOcZHGhB16Gy3R7mW5o6k1Sq7vqet0UDpRXyp74UUUUAFFFFABRRRQAUUUUrgFFFFMAooooAKKKKACiiigAooooAKKKKACiiigAoooyKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBK+TfE122oa1ezyElnlbH0zX1i3SvkPUf+QhN/10P86+r4VinUqPyX6ngZ7J8kUvP9CtS0UV9qfMhRRSZoHYWkPSlpD0oA7D4e+Df+EqNy/2jykhwv4mu2/4U1H31CT8qj/Z+/499W/66r/KvZa+DzXNMTQxU6cJWSPqsDgKFSgpyWrPl7x34aXwxqMdqkplDruya5ivSfjn/wAjFb/9cz/OvNq+ryurOtho1Ju7Z8/jKap1pRjsOooor0DkCiiigArc8EXhtPFWmvGcEyqv5nFYdaXhcf8AFSad/wBd1/mK5sZFSoTT7M2oXVWLXdH1jGcgU81HF90VIa/KnuffLYKKKM0hhRRkUZFABXk/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pkCyjC7BmvpPwb4qsPFmmteaZv8AKVtp3CvlH4b+ApvG0lykNytv5X+znNfTHwu8IS+DtDksZZ/OZn3bqBNFD48/8k9vPqK+PWPJr7Y+J+g3XiTwpcadYlBPJ03HivA/+FE+Jv71t/31QCdjye3j3yon95hX0Zp3wM0q7sbeZ7yX94oauOt/gb4ninjkLWxCnON1fTWkwtb6dbQyY3xoFOPWgGeRH4B6Rni8mpP+FB6T/wA/k1e1jpRQI8U/4UHpP/P5NR/woPSP+fuava6KAPFP+FB6R/z9zV5V8YPA1n4LurSKzneTzgWIbtX2BXj3xq+H2qeML6zl0t4gIU2sHOO9AHy0OteifAhsfEbTffcP0rWHwL8Tf89bX/vquq+GXwp13w34wstSvmt2gizuCtQNu59BUUUUCCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooARuhr5C1D/j/n/wCuh/nX163Q18hah/x/z/8AXQ/zr6zhX46ny/U+ez37Hz/Qr0UUV9ofNiV7TpGkeBX02B7mS288oN+WAOa8WpprzsdgXirWqONux14XELD3vBSv3Pdf7G+H/d7X/vulGjfD/wDv2v8A33XhPyUfJXnf2NN/8v5HV/aMf+fSPo/w9eeEtAWVdMu7aISnL4fqa2f+Ev0P/oJW/wD30K+V/ko+SuefDMZvmlUbZvHO5xVowSR9EeIG8Ha9cxz39zbSSIMZLiq2neFfBepXDR2YgmkAzsRsnFeADZmvaPgTovlwXGqyL88p2pn0rmx2Xyy7D88ar8ka4XExxlazgvM6z/hW/hv/AJ8xXCfFXw5omgaXF9ithHcSkgMDXtx6V8+/GjVvt3iNLJGytsvP1riyWtiMRiopzbS1ep05lSo0aLaitTzwDApaKK/QD5cK0/C//Iyad/18L/MVmVp+F/8AkZNO/wCvhf5iufFfwZ+jNKHxx9T6vh+6KkNRw/dFSGvyh7n3y2Erzf4weObvwXBZPZwpKZmI+btXpFc74t8IaX4qSFdWjMgiOVAO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igAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopKAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBuadxXx75r/89Go86T/nq1fW/wCqz/5+/wDkv/BPnv7fX/Pv8f8AgH2DmjNfHvnSf89Wo86T/nq1H+qsv+fv4f8ABD+3l/J+P/APsLPvRn3r4986T/nq1HnSf89Wo/1Vl/z9/D/gh/by/k/H/gH2Fn3oz718e+dJ/wA9Wo86T/nq1H+qsv8An7+H/BD+3l/J+P8AwD7Cz70Z96+PfOk/56tR50n/AD1aj/VWX/P38P8Agh/by/k/H/gH2Fn3oz718e+dJ/z1ajzpP+erUf6qy/5+/h/wQ/t5fyfj/wAA+ws+9Gfevj3zpP8Anq1HnSf89Wo/1Vl/z9/D/gh/by/k/H/gH2Fn3oz718e+dJ/z1ajzpP8Anq1H+qsv+fv4f8EP7eX8n4/8A+ws+9Gfevj3zpP+erUedJ/z1aj/AFVl/wA/fw/4If28v5Px/wCAfYWfejPvXx750n/PVqPOk/56tR/qrL/n7+H/AAQ/t5fyfj/wD7Cz70Z96+PfOk/56tR50n/PVqP9VZf8/fw/4If28v5Px/4B9hZ96M+9fHvnSf8APVqPOk/56tR/qrL/AJ+/h/wQ/t5fyfj/AMA+ws+9Gfevj3zpP+erUedJ/wA9Wo/1Vl/z9/D/AIIf28v5Px/4B9hZ96M+9fHvnSf89Wo86T/nq1H+qsv+fv4f8EP7eX8n4/8AAPsLPvRn3r4986T/AJ6tR50n/PVqP9VZf8/fw/4If28v5Px/4B9hZ96M+9fHvnSf89Wo86T/AJ6tR/qrL/n7+H/BD+3l/J+P/APsLPvRn3r4986T/nq1HnSf89Wo/wBVZf8AP38P+CH9vL+T8f8AgH2Fn3oz718e+dJ/z1ajzpP+erUf6qy/5+/h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/wCfv4f8EP7eX8n4/wDAPsLPvRXx750n/PVqKP8AVWX/AD9/D/gh/by/k/H/AIBHgUYpaK+zPnAooooEFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUA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ooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooGFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUCCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooHYKKKKjmj3DlkFFFFHNHuHLIKKSinzR7j5ZC0UlFHNHuHLIWikoo5o9w5ZC0UlFHNHuHLIWikoo5o9w5ZC0UlFHNHuHLIWikoo5o9w5ZC0UlFHNHuHLIWikoo5o9w5ZC0UlFHNHuHLIWikoo5o9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BjxpJw6qw9CM0z7LB/zwj/75FTUUAMjijjz5aKueu0YzT8UUUAGKMUUUAGKMUUUAFFFFABRRRQAySNJBh1Vh7jNM+zQf88Y/++RU1JQBF9ng/wCeMf8A3yKPs8H/ADxj/wC+RUtFAEX2eD/njH/3yKPs8H/PGP8A75FS0UAMSOOPPloq567Rin8UUUALRRRQAUUUUAFFFFABRRRQAUUUUAFBooNAHhvx/wD+Qxpf/XFv5ivK69U+P/8AyGNL/wCuLfzFeV1+kZF/uVP5/mz4rMv95l/XQKKKK9g88KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD1D4Af8jBqP8A17j/ANCr3Ve9eFfAD/kYNR/69x/6FXuq96/Oc/8A9+n8vyPsco/3ZfMWiiivFPUCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAA0CiigAooooAKKKKACiiigAoNFBoA8N/aA/5DGlf9cW/nXldeqftAf8hjSv8Ari3868rr9IyL/cqfz/NnxWZf7zL+ugUUUV7B54UUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAHqHwA/5GDUf+vcf+hV7qvevCvgB/yMGo/wDXuP8A0KvdV71+c5//AL9P5fkfY5R/uy+YtFFFeKeoFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFZer6/pejSwJqt/bWbTnbH58gTcfQZoA1KKRGDoGUgqRkEd6WgAooooAKKKKACisqXxFpEWqHTZdStEvxj/R2lUPz04zWrQAUUUUAFFFFABRRUEF3b3EkiQTRyPGcOFbJU+9AE9FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFZNp4i0e91CWxtNTtJ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vTUjRR8qAfQVyHxY0C/8SeCbzS9KK/aZnjxubaMBwTz9M0AYn7PERj+GtoW6vNK34buK7HxpqyaF4W1PUnOPs8DMvu2OB+eKPB2hJ4c8NWOlRHcLeMKzf3m7mub1y2bxtr8WnbG/sDT5t905HFxKp4jHqARz9KAJ/g3oz6H4B0+OdClxODcSA9QWOcH6ZruaYiAAAAADoPSn0AFFFFABRRRQAUUUUAFFFFABRRRQAUGig0AeG/tAf8hjSv8Ari3868rr1T9oD/kMaV/1xb+deV1+kZF/uVP5/mz4rMv95l/XQKKKK9g88KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD1D4Af8jBqP8A17j/ANCr3Ve9eFfAD/kYNR/69x/6FXuq96/Oc/8A9+n8vyPsco/3ZfMWiiivFPUCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACuO+IHgiy8Zx6cL5/L+yTiXjnevdfxFdjRQAxVAAVRhQMACn0UUAFFFFABQaKKAGoiooVRhRWB428K2Hi7SVsNTLrCJFkyhweD0/GuhooArWNpDZWcFrbIEhhQKgHYDpVmiigAqubWE3In8qPzwNu/HOPTNWKKACsnxFoOn+IdOax1a3W4tmYNtb1BrWooAhs7aGzto4LaNY4YxtVFGABU1FFABRRRQAYooooAKKKKACiiigAooooAKKKKACiiigAoxRRQA1lDKVYAg9Qe9OwAMAcUUUAcv4t8G6Z4pu9MuNUVz9hl8xVHR/Y+1dOq7RgUtFABRRRQAYHpRRRQAYFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABQaKDQB4b+0B/wAhjSv+uLfzryuvVP2gP+QxpX/XFv515XX6RkX+5U/n+bPisy/3mX9dAooor2DzwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPUPgB/wAjBqP/AF7j/wBCr3Ve9eFfAD/kYNR/69x/6FXuq96/Oc//AN+n8vyPsco/3ZfMWiiivFPUCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoNFBoA8N/aA/5DGlf9cW/nXldeqfH/AP5DGl/9cW/nXlVfpGRf7lT+f5s+KzL/AHmX9dBaKKK9g88KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigZ6h8AjjxDqH/XuP/QhXu1fPHwTuxb+MliY4E8LIPqBn+lfQ9fnXEMHHGtvqkfX5NJPDJdmwooorxD1QooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKD0oooA8N+P5H9taYO4hb+deVd69D+N92tx4uWFTnyIgD+PNee1+lZLFxwcE+35nw+YzUsTO3cKKKK9Y4wooooEFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAF/QNRbSdasr5c/uJVkIHcA8ivqzTruK+soLmBw8UqB1Ydwa+RK9c+DfjJIRHoWovgE4tnY9z/D/AIV8vxHl8q1NV6a1jv6HuZPi1Tm6Utn+Z7VRRRXw59SFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFA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KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigYUUUUCCiiigAooooAKKKKACiiigYUUUUAFFFFABRRSUALRRRQAUUUUCCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKBhRRRQIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigYUUV7bpllousfDH7ff2sO+3t33SouHDJ3B9eK4Mfj1glFyi2m7aHThsK8Q2k7NK54lRRRXecoUUUUAFFFFABSZ5pasWVlc3T7LW3lnb/AKZoSf0qZTjBXbKUXLYr0V12mfDvxJfkH7A1uh6mc7CPwPNdXZ/B26eMfa9SSNu/loT/ADrzqucYOl8U18tfyOmGAxE9oM8morofGfhebwxfLbzXMM4cblKHnHuO1c9XdQrQrwVSDumYVKcqcnCa1QUUUhrUkXtmk71NZOkF1FNOnmxKwZo+zgHkV6p8QvBujW3hlNa0wG2YhCEU5V9xA6fjXBiMfDD1YU5p+9on5m9HDyrQlOP2TyaijFFd5gFFFFBIUUUUDCkrsdU8E3Fv4QtNdtpjNE8YeWMjBTPp7Vx9c1DFU8Qm6bvZ2+ZpVoypW5uuoUgrq/hva6dqHiNLHVYB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cq+Hivad2d1DE3tTqt8h7XcafPpnwfuLW6XZMli29fQ46VxnhX4Z2OuaVDeJq5beo3rGoO1u4rY+Inj3T7/wmLbTZhJcXi4dAeY17hvQ9q8dhuri3P7iaSPjBw5XNeNlmExk6M5KXJJyvsd+MxFCNSMGuaKVj2dPhPoVqP8ATNSlb/fIWtDS9B8B6JMspurFpkPDXFwGx9ATXgrSyt96Rz9WzTST3JrrllGJqK1XEN+iMI5hRpv3KSPpTWvFPhS506e3vNTsZ4GGGjEgfI+gr5tufL+0yeR/q9x25647Uym12ZZlccApKMm79zDG42WLtdJWNXwvH5/iPS4/71zGv/jwrr/jc2fFsa/3YV/lT9F8baFpYtGsvDsaTIV82YkFgO5U9c1zfjzXo/EXiWa+hBWEhUUN1wBisKarVsfGrKDjGKa1sW3Tp4VxUrttHPUUUV7p5wUUUUCCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKADNFFFABRRRQAUUUUDCpbm4knWMSys3lIETPOFHQCoqKlxT1YCUtFFUMKKKKBBSUtFABRRRQMKKKKBBRRRQAUUUUCCiiigYUUUUCCiiigAooooAKTFLRQAmKWiigAooooAKKKKACiiigAooooGFFFFAgooooAKKKKACiiigAooooGFFFFAgooooGFFFFAgpKWigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKTNLQAUUlGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNFAGJ/b/8A07f+P/8A1qQ+IP8Ap1/8if8A1qKK8j6zV7nf7OPYafEH/Tr/AORP/rUf8JB/07f+RP8A61FFH1ip3H7KHYP+Eg/6dv8AyJ/9aj/hIP8Ap2/8if8A1qKKPrFTuHsodg/4SD/p2/8AIn/1qP8AhIP+nb/yJ/8AWooo+sVO4eyh2D/hIP8Ap2/8if8A1qP+Eg/6dv8AyJ/9aiij6xU7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';

/**
 * 西安大学生拼车平台 - Cloudflare Worker
 * 功能：API路由、高德地图代理、反爬虫、访客统计
 */

const MAX_REQUESTS_PER_MINUTE = 60;
const BAN_DURATION = 24 * 60 * 60 * 1000; // 24小时
const SEARCH_RATE_LIMIT = 2; // 每秒2次
const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;
const MAX_MATCH_PER_DAY = 5; // 每天最多匹配5次
const MIN_SEARCH_LENGTH = 2; // 最小搜索长度（字符）
const MAX_QUERY_PER_MINUTE = 10; // 每分钟最多查询10次

// 爬虫UA黑名单
const CRAWLER_PATTERNS = [
  'bot', 'spider', 'crawler', 'scan', 'python-requests',
  'baiduspider', '360spider', 'yisouspider', 'bytespider',
  'sogou', 'petalbot', 'bingbot', 'googlebot', 'mj12bot'
];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const ip = request.headers.get('CF-Connecting-IP');
    const ua = request.headers.get('User-Agent') || '';

    // CORS处理
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }

    try {
      // 反爬虫检查
      const crawlerCheck = await checkCrawler(ua, ip, env);
      if (!crawlerCheck.allowed) {
        return jsonResponse({ error: crawlerCheck.reason }, 403);
      }

      // 路由
      if (url.pathname === '/' || url.pathname === '/index.html') {
        // 访客统计（只在访问HTML页面时统计）
        await trackVisitor(request, ip, ua, env);
        return new Response(INDEX_HTML, {
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
          }
        });
      } else if (url.pathname === '/stats.html') {
        // 访客统计（只在访问HTML页面时统计）
        await trackVisitor(request, ip, ua, env);
        return new Response(STATS_HTML, {
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
          }
        });
      } else if (url.pathname === '/api/search') {
        return handleSearch(request, env);
      } else if (url.pathname === '/api/resolve-poi') {
        return handleResolvePOI(request, env);
      } else if (url.pathname === '/api/create-trip') {
        return handleCreateTrip(request, env, ip);
      } else if (url.pathname === '/api/match') {
        return handleMatch(request, env, ip);
      } else if (url.pathname === '/api/search-by-time') {
        return handleSearchByTime(request, env, ip);
      } else if (url.pathname === '/api/search-by-route') {
        return handleSearchByRoute(request, env, ip);
      } else if (url.pathname === '/api/stats') {
        return handleStats(env);
      } else if (url.pathname === '/api/confirm-match') {
        return handleConfirmMatch(request, env, ip);
      } else if (url.pathname === '/api/my-trips') {
        return handleMyTrips(request, env, ip);
      } else if (url.pathname === '/api/cleanup') {
        return handleCleanup(env);
      } else if (url.pathname === '/images/wechhat.jpg') {
        return handleImage('wechat');
      } else if (url.pathname === '/images/alipay.jpg') {
        return handleImage('alipay');
      } else if (url.pathname.startsWith('/api/discussions')) {
        // 代理 Giscus API 请求
        const giscusUrl = `https://giscus.app${url.pathname}${url.search}`;
        return fetch(giscusUrl, {
          method: request.method,
          headers: request.headers,
          body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : undefined
        });
      }

      return jsonResponse({ error: 'Not found' }, 404);
    } catch (error) {
      console.error('Worker error:', error);
      return jsonResponse({ error: 'Internal server error' }, 500);
    }
  }
};

// 内存中的临时封禁缓存和访问记录
const IP_BAN_CACHE = new Map(); // IP封禁缓存：key=IP, value=解封时间戳
const IP_ACCESS_LOG = new Map(); // 访问记录：key=IP, value=访问时间戳数组

// 清理过期的访问记录（保留最近2分钟）
function cleanupAccessLog() {
  const now = Date.now();
  const twoMinutesAgo = now - 120000;

  for (const [ip, timestamps] of IP_ACCESS_LOG.entries()) {
    const validTimestamps = timestamps.filter(t => t > twoMinutesAgo);
    if (validTimestamps.length === 0) {
      IP_ACCESS_LOG.delete(ip);
    } else {
      IP_ACCESS_LOG.set(ip, validTimestamps);
    }
  }
}

// 反爬虫检查
async function checkCrawler(ua, ip, env) {
  // UA检查
  const lowerUA = ua.toLowerCase();
  for (const pattern of CRAWLER_PATTERNS) {
    if (lowerUA.includes(pattern)) {
      return { allowed: false, reason: 'Crawler detected' };
    }
  }

  const now = Date.now();

  // 检查内存缓存中的IP封禁
  const banUntil = IP_BAN_CACHE.get(ip);
  if (banUntil && banUntil > now) {
    return { allowed: false, reason: 'IP banned' };
  } else if (banUntil && banUntil <= now) {
    // 封禁已过期，删除
    IP_BAN_CACHE.delete(ip);
  }

  // 频率检查：统计最近1分钟的访问次数
  const oneMinuteAgo = now - 60000;
  const accessLog = IP_ACCESS_LOG.get(ip) || [];
  const recentAccess = accessLog.filter(t => t > oneMinuteAgo);

  if (recentAccess.length >= MAX_REQUESTS_PER_MINUTE) {
    // 超过限制，封禁24小时
    IP_BAN_CACHE.set(ip, now + BAN_DURATION);
    return { allowed: false, reason: 'Rate limit exceeded' };
  }

  // 记录本次访问
  recentAccess.push(now);
  IP_ACCESS_LOG.set(ip, recentAccess);

  // 定期清理过期记录（每100次请求清理一次）
  if (Math.random() < 0.01) {
    cleanupAccessLog();
  }

  return { allowed: true };
}

// 访客统计
async function trackVisitor(request, ip, ua, env) {
  const cf = request.cf || {};
  const country = cf.country || 'Unknown';
  const city = cf.city || 'Unknown';
  const now = Date.now();

  // 同时记录UV和PV：count字段记录访问次数（PV）
  await env.DB.prepare(`
    INSERT INTO visitors (ip, ua, country, city, count, last_visit)
    VALUES (?, ?, ?, ?, 1, ?)
    ON CONFLICT(ip) DO UPDATE SET
      count = count + 1,
      last_visit = ?,
      ua = ?,
      country = ?,
      city = ?
  `).bind(ip, ua, country, city, now, now, ua, country, city).run();
}

// 高德地图搜索API
async function handleSearch(request, env) {
  const url = new URL(request.url);
  const keywords = url.searchParams.get('keywords');

  if (!keywords) {
    return jsonResponse({ error: 'Missing keywords' }, 400);
  }

  const AMAP_KEY = env.AMAP_KEY;
  if (!AMAP_KEY) {
    console.error('高德地图API Key未配置');
    return jsonResponse({ error: 'API key not configured', tips: [] }, 500);
  }

  const apiUrl = `https://restapi.amap.com/v3/assistant/inputtips?key=${AMAP_KEY}&keywords=${encodeURIComponent(keywords)}&city=西安`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log('高德API返回:', { keywords, status: data.status, count: data.count, info: data.info });

    // 高德API返回格式：status=1表示成功，tips是结果数组
    if (data.status === '0') {
      console.error('高德API错误:', data.info);
      return jsonResponse({ error: data.info, tips: [] });
    }

    return jsonResponse(data);
  } catch (error) {
    console.error('高德API请求失败:', error);
    return jsonResponse({ error: 'API request failed', tips: [] }, 500);
  }
}

// 高德POI解析
async function handleResolvePOI(request, env) {
  const body = await request.json();
  const { name, address } = body;

  if (!name) {
    return jsonResponse({ error: 'Missing name' }, 400);
  }

  const AMAP_KEY = env.AMAP_KEY;
  if (!AMAP_KEY) {
    return jsonResponse({ error: 'API key not configured' }, 500);
  }

  const apiUrl = `https://restapi.amap.com/v3/place/text?key=${AMAP_KEY}&keywords=${encodeURIComponent(name)}&city=西安&citylimit=true`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  return jsonResponse(data);
}

// 创建行程
async function handleCreateTrip(request, env, ip) {
  const body = await request.json();
  const { name, school, campus, college, departure_lat, departure_lon, departure_location_name, destination_lat, destination_lon, destination_location_name, departure_date, departure_time, contact, time_range, user_key, user_id } = body;

  // 验证必填字段
  if (!name || !school || !departure_lat || !departure_lon || !departure_location_name || !destination_lat || !destination_lon || !destination_location_name || !departure_date || !departure_time || !contact || !time_range || !user_key || !user_id) {
    return jsonResponse({ error: '缺少必填字段' }, 400);
  }

  // 验证坐标合法性（西安市及周边范围：经度107-110，纬度33-35）
  const isValidCoord = (lat, lon) => {
    const latNum = parseFloat(lat);
    const lonNum = parseFloat(lon);
    if (isNaN(latNum) || isNaN(lonNum)) return false;
    // 西安及周边范围
    return lonNum >= 107 && lonNum <= 110 && latNum >= 33 && latNum <= 35;
  };

  if (!isValidCoord(departure_lat, departure_lon)) {
    return jsonResponse({ error: '出发地坐标异常，请重新选择地点' }, 400);
  }

  if (!isValidCoord(destination_lat, destination_lon)) {
    return jsonResponse({ error: '目的地坐标异常，请重新选择地点' }, 400);
  }

  // 验证地点名称不为空且合理
  if (departure_location_name.length < 2 || destination_location_name.length < 2) {
    return jsonResponse({ error: '地点名称过短，请选择完整的地点名称' }, 400);
  }

  // 检测异常坐标：出发地和目的地坐标完全相同
  if (departure_lat === destination_lat && departure_lon === destination_lon) {
    return jsonResponse({ error: '出发地和目的地不能相同' }, 400);
  }

  // 验证time_range值
  const timeRangeValue = parseInt(time_range);
  if (![30, 60].includes(timeRangeValue)) {
    return jsonResponse({ error: '时间范围只能是30或60分钟' }, 400);
  }

  // 验证手机号格式（宽松规则：1开头的11位数字）
  const phonePattern = /^1\d{10}$/;
  if (!phonePattern.test(contact.trim())) {
    return jsonResponse({ error: '请输入正确的11位手机号' }, 400);
  }

  // 计算时间戳
  const departureDateTime = new Date(`${departure_date}T${departure_time}:00`);
  const departureTimestamp = departureDateTime.getTime();
  const now = Date.now();
  const sevenDaysLater = now + SEVEN_DAYS;

  // 检查手机号是否在黑名单中
  const phoneBlacklist = await env.DB.prepare(
    'SELECT * FROM phone_blacklist WHERE phone = ? AND banned_until > ?'
  ).bind(contact, now).first();

  if (phoneBlacklist) {
    const remainingHours = Math.ceil((phoneBlacklist.banned_until - now) / (60 * 60 * 1000));
    return jsonResponse({
      error: `该手机号已被封禁，原因：${phoneBlacklist.reason}`,
      hint: `剩余封禁时间：约${remainingHours}小时`
    }, 403);
  }

  // 验证时间范围
  if (departureTimestamp < now) {
    return jsonResponse({ error: '出发时间不能早于当前时间' }, 400);
  }

  if (departureTimestamp > sevenDaysLater) {
    return jsonResponse({ error: '仅支持未来7天内的行程，请勿录入7天后的行程' }, 400);
  }

  // 检查IP短期高频（5分钟内超过3次）
  const fiveMinutesAgo = now - 5 * 60 * 1000;
  const recentTripCount = await env.DB.prepare(
    'SELECT COUNT(*) as count FROM trips WHERE ip = ? AND created_at > ?'
  ).bind(ip, fiveMinutesAgo).first();

  if (recentTripCount.count >= 3) {
    return jsonResponse({
      error: '发布过于频繁，请稍后再试',
      hint: '为防止刷单，每5分钟最多发布3次行程'
    }, 429);
  }

  // 检测坐标作弊：检查是否有多个不同用户使用完全相同的坐标
  const oneHourAgo = now - 60 * 60 * 1000;
  const sameCoordCount = await env.DB.prepare(
    'SELECT COUNT(DISTINCT user_key) as count FROM trips WHERE ((departure_lat = ? AND departure_lon = ?) OR (destination_lat = ? AND destination_lon = ?)) AND created_at > ?'
  ).bind(departure_lat, departure_lon, destination_lat, destination_lon, oneHourAgo).first();

  if (sameCoordCount.count >= 5) {
    return jsonResponse({
      error: '检测到异常坐标重复使用，请使用真实地点',
      hint: '请通过地图搜索选择真实地点，不要手动修改坐标'
    }, 403);
  }

  // 检查IP异常高频风控（24小时内发布超过20次）
  const oneDayAgo = now - 24 * 60 * 60 * 1000;
  const ipTripCount = await env.DB.prepare(
    'SELECT COUNT(*) as count FROM trips WHERE ip = ? AND created_at > ?'
  ).bind(ip, oneDayAgo).first();

  if (ipTripCount.count >= 20) {
    // 临时封禁24小时
    await env.DB.prepare(`
      INSERT INTO ip_bans (ip, banned_until, reason)
      VALUES (?, ?, ?)
      ON CONFLICT(ip) DO UPDATE SET banned_until = ?, reason = ?
    `).bind(ip, now + 24 * 60 * 60 * 1000, '异常高频发单', now + 24 * 60 * 60 * 1000, '异常高频发单').run();

    return jsonResponse({ error: '检测到异常高频发单行为，您的IP已被临时封禁24小时' }, 403);
  }

  // 检查相同手机号短期重复（1小时内同一手机号最多2次）
  const phoneCount = await env.DB.prepare(
    'SELECT COUNT(*) as count FROM trips WHERE contact = ? AND created_at > ?'
  ).bind(contact, oneHourAgo).first();

  if (phoneCount.count >= 2) {
    return jsonResponse({
      error: '该手机号1小时内已发布过行程，请勿重复发单',
      hint: '如需修改行程，请稍后再试'
    }, 429);
  }

  // 检测机器人行为特征（姓名包含"测试"、"test"等）
  const suspiciousPatterns = /测试|test|bot|script|批量|刷单|垃圾|假|虚假/i;
  if (suspiciousPatterns.test(name) || suspiciousPatterns.test(school)) {
    // 封禁IP
    await env.DB.prepare(`
      INSERT INTO ip_bans (ip, banned_until, reason)
      VALUES (?, ?, ?)
      ON CONFLICT(ip) DO UPDATE SET banned_until = ?, reason = ?
    `).bind(ip, now + 24 * 60 * 60 * 1000, '检测到刷单行为', now + 24 * 60 * 60 * 1000, '检测到刷单行为').run();

    // 封禁手机号
    await env.DB.prepare(`
      INSERT INTO phone_blacklist (phone, reason, banned_at, banned_until)
      VALUES (?, ?, ?, ?)
      ON CONFLICT(phone) DO UPDATE SET banned_until = ?, reason = ?
    `).bind(contact, '使用脚本刷单', now, now + 7 * 24 * 60 * 60 * 1000, now + 7 * 24 * 60 * 60 * 1000, '使用脚本刷单').run();

    return jsonResponse({
      error: '检测到异常发单行为，您的IP和手机号已被封禁',
      hint: '请勿使用脚本刷单。IP封禁24小时，手机号封禁7天'
    }, 403);
  }

  // 生成地理网格和时间段
  const departureGrid = generateGrid(departure_lat, departure_lon);
  const destinationGrid = generateGrid(destination_lat, destination_lon);
  const timeSlot = generateTimeSlot(departureTimestamp);
  const today = new Date(departureTimestamp).toISOString().split('T')[0];

  // 检查发单频率限制（同一天、同地点、同时段最多5次）
  const tripLimit = await env.DB.prepare(`
    SELECT count FROM trip_limits
    WHERE user_key = ? AND date = ? AND departure_grid = ? AND destination_grid = ? AND time_slot = ?
  `).bind(user_key, today, departureGrid, destinationGrid, timeSlot).first();

  if (tripLimit && tripLimit.count >= 5) {
    return jsonResponse({
      error: '同一天、同地点、同时段最多发布5次行程，请勿重复发单',
      hint: '如需修改行程，请稍后再试或更改出发时间'
    }, 429);
  }

  // 插入数据库（包含出发地和目的地、user_key、user_id）
  const result = await env.DB.prepare(`
    INSERT INTO trips (name, school, campus, college, departure_lat, departure_lon, departure_location_name, destination_lat, destination_lon, destination_location_name, departure_date, departure_time, departure_timestamp, contact, time_range, ip, user_key, user_id, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(name, school, campus || '', college || '', departure_lat, departure_lon, departure_location_name, destination_lat, destination_lon, destination_location_name, departure_date, departure_time, departureTimestamp, contact, timeRangeValue, ip, user_key, user_id, now).run();

  // 更新发单频率计数
  await env.DB.prepare(`
    INSERT INTO trip_limits (user_key, date, departure_grid, destination_grid, time_slot, count, last_trip)
    VALUES (?, ?, ?, ?, ?, 1, ?)
    ON CONFLICT(user_key, date, departure_grid, destination_grid, time_slot)
    DO UPDATE SET count = count + 1, last_trip = ?
  `).bind(user_key, today, departureGrid, destinationGrid, timeSlot, now, now).run();

  // 清理过期数据
  await cleanupExpiredTrips(env);

  return jsonResponse({ success: true, id: result.meta.last_row_id });
}

// 匹配行程（仅限已发布行程的用户使用，返回联系方式）
async function handleMatch(request, env, ip) {
  const body = await request.json();
  const { trip_id } = body;

  // 规则1：必须先发布自己的行程
  if (!trip_id) {
    return jsonResponse({
      error: '您需要先发布自己的行程才能查看其他人的联系方式',
      hint: '请先填写并提交您的拼车信息'
    }, 403);
  }

  // 验证trip_id是否存在且属于该IP（防止伪造）
  const userTrip = await env.DB.prepare(
    'SELECT * FROM trips WHERE id = ? AND ip = ?'
  ).bind(trip_id, ip).first();

  if (!userTrip) {
    return jsonResponse({
      error: '行程不存在、已过期或不属于您',
      hint: '只能使用自己发布的行程进行匹配'
    }, 403);
  }

  // 验证行程时间是否有效（未来7天内）
  const now = Date.now();
  if (userTrip.departure_timestamp < now) {
    return jsonResponse({ error: '您的行程已过期，无法进行匹配' }, 400);
  }

  // 规则2：检查匹配频率限制
  const today = new Date().toISOString().split('T')[0];
  const limitCheck = await checkMatchLimit(ip, today, env);

  if (!limitCheck.allowed) {
    return jsonResponse({
      error: '今日匹配次数已达上限',
      limit: limitCheck.limit,
      used: limitCheck.used
    }, 429);
  }

  // 使用用户自己的行程信息进行匹配
  const userDepartureLat = userTrip.departure_lat;
  const userDepartureLon = userTrip.departure_lon;
  const userDestinationLat = userTrip.destination_lat;
  const userDestinationLon = userTrip.destination_lon;
  const userTimestamp = userTrip.departure_timestamp;

  // 时间范围：固定为±1小时
  const oneHourMs = 60 * 60 * 1000;
  const minTime = userTimestamp - oneHourMs;
  const maxTime = userTimestamp + oneHourMs;

  // 查询时间范围内的行程（排除自己的）
  const trips = await env.DB.prepare(`
    SELECT * FROM trips
    WHERE departure_timestamp BETWEEN ? AND ?
    AND id != ?
    ORDER BY departure_timestamp
  `).bind(minTime, maxTime, trip_id).all();

  // 两点一线匹配：使用智能匹配（距离 + 名称相似度）
  const matches = [];
  for (const trip of trips.results) {
    const departureDistance = haversineDistance(userDepartureLat, userDepartureLon, trip.departure_lat, trip.departure_lon);
    const destinationDistance = haversineDistance(userDestinationLat, userDestinationLon, trip.destination_lat, trip.destination_lon);

    // 智能匹配：出发地和目的地都要匹配
    const departureMatch = isLocationMatch(
      userDepartureLat, userDepartureLon, userTrip.departure_location_name,
      trip.departure_lat, trip.departure_lon, trip.departure_location_name
    );

    const destinationMatch = isLocationMatch(
      userDestinationLat, userDestinationLon, userTrip.destination_location_name,
      trip.destination_lat, trip.destination_lon, trip.destination_location_name
    );

    // 必须同时满足：出发地匹配 且 目的地匹配
    if (departureMatch && destinationMatch) {
      // 检查是否已匹配
      const [trip1, trip2] = trip_id < trip.id ? [trip_id, trip.id] : [trip.id, trip_id];
      const matchRecord = await env.DB.prepare(
        'SELECT * FROM trip_matches WHERE trip_id_1 = ? AND trip_id_2 = ?'
      ).bind(trip1, trip2).first();

      const isMatched = !!matchRecord;

      matches.push({
        id: trip.id,
        name: trip.name,
        school: trip.school,
        campus: trip.campus,
        college: trip.college,
        departure_location_name: trip.departure_location_name,
        destination_location_name: trip.destination_location_name,
        departure_date: trip.departure_date,
        departure_time: trip.departure_time,
        contact: isMatched ? null : trip.contact, // 已匹配则不显示联系方式
        departure_distance: departureDistance.toFixed(2),
        destination_distance: destinationDistance.toFixed(2),
        is_matched: isMatched
      });
    }
  }

  // 记录匹配次数
  await recordMatchAttempt(ip, today, env);

  return jsonResponse({
    matches,
    your_trip: {
      id: userTrip.id,
      departure: userTrip.departure_location_name,
      destination: userTrip.destination_location_name,
      time: `${userTrip.departure_date} ${userTrip.departure_time}`
    }
  });
}

// 访客统计
// 确认匹配
async function handleConfirmMatch(request, env, ip) {
  const body = await request.json();
  const { my_trip_id, matched_trip_id } = body;

  if (!my_trip_id || !matched_trip_id) {
    return jsonResponse({ error: '缺少必要参数' }, 400);
  }

  // 验证用户拥有 my_trip_id
  const myTrip = await env.DB.prepare('SELECT * FROM trips WHERE id = ? AND ip = ?')
    .bind(my_trip_id, ip).first();

  if (!myTrip) {
    return jsonResponse({ error: '无效的行程或无权限操作' }, 403);
  }

  // 验证 matched_trip_id 存在
  const matchedTrip = await env.DB.prepare('SELECT * FROM trips WHERE id = ?')
    .bind(matched_trip_id).first();

  if (!matchedTrip) {
    return jsonResponse({ error: '匹配的行程不存在' }, 404);
  }

  // 确保 trip_id_1 < trip_id_2 以满足 UNIQUE 约束
  const [trip1, trip2] = my_trip_id < matched_trip_id ?
    [my_trip_id, matched_trip_id] : [matched_trip_id, my_trip_id];

  try {
    await env.DB.prepare(`
      INSERT INTO trip_matches (trip_id_1, trip_id_2, confirmed_by, confirmed_at)
      VALUES (?, ?, ?, ?)
      ON CONFLICT(trip_id_1, trip_id_2) DO NOTHING
    `).bind(trip1, trip2, my_trip_id, Date.now()).run();

    return jsonResponse({ success: true });
  } catch (error) {
    console.error('Confirm match error:', error);
    return jsonResponse({ error: '确认匹配失败' }, 500);
  }
}

// 查询我的订单（双因子验证：user_key + user_id）
async function handleMyTrips(request, env, ip) {
  const body = await request.json();
  const { user_identifier, phone, user_id } = body;

  if (!user_identifier || !phone || !user_id) {
    return jsonResponse({ error: '缺少必要参数' }, 400);
  }

  // 验证手机号格式
  const phonePattern = /^1\d{10}$/;
  if (!phonePattern.test(phone.trim())) {
    return jsonResponse({ error: '请输入正确的11位手机号' }, 400);
  }

  // 生成 user_key
  const userKey = await generateUserKey(user_identifier, phone);

  // 查询7天内的订单（双因子验证）
  const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  const trips = await env.DB.prepare(`
    SELECT id, name, school, campus, college, departure_location_name, destination_location_name,
           departure_date, departure_time, departure_timestamp, contact, created_at
    FROM trips
    WHERE user_key = ? AND user_id = ? AND created_at > ?
    ORDER BY departure_timestamp ASC
  `).bind(userKey, user_id, sevenDaysAgo).all();

  if (!trips.results || trips.results.length === 0) {
    return jsonResponse({
      total: 0,
      trips: [],
      message: '未找到您的订单记录，请确认输入的用户标识和手机号是否正确'
    });
  }

  // 查询每个订单的匹配状态
  const tripsWithStatus = await Promise.all(trips.results.map(async trip => {
    // 查询该订单的所有匹配确认记录
    const matches = await env.DB.prepare(`
      SELECT * FROM trip_matches
      WHERE trip_id_1 = ? OR trip_id_2 = ?
      OR trip_id_1 = ? OR trip_id_2 = ?
    `).bind(
      Math.min(trip.id, trip.id),
      Math.max(trip.id, trip.id),
      Math.min(trip.id, trip.id),
      Math.max(trip.id, trip.id)
    ).all();

    const matchCount = matches.results ? matches.results.length : 0;

    return {
      id: trip.id,
      name: trip.name,
      school: trip.school,
      campus: trip.campus,
      college: trip.college,
      departure: trip.departure_location_name,
      destination: trip.destination_location_name,
      departure_date: trip.departure_date,
      departure_time: trip.departure_time,
      contact: trip.contact,
      match_count: matchCount,
      created_at: trip.created_at,
      is_expired: trip.departure_timestamp < Date.now()
    };
  }));

  return jsonResponse({
    total: tripsWithStatus.length,
    trips: tripsWithStatus
  });
}

async function handleStats(env) {
  // UV（独立访客数）
  const totalVisitors = await env.DB.prepare(
    'SELECT COUNT(*) as total FROM visitors'
  ).first();

  // PV（页面浏览量）：所有IP的count总和
  const totalPageViews = await env.DB.prepare(
    'SELECT SUM(count) as total FROM visitors'
  ).first();

  // IP归属地排名（按最后访问时间排序，包含访问次数）
  const topLocations = await env.DB.prepare(`
    SELECT ip, country, city, count
    FROM visitors
    ORDER BY last_visit DESC
    LIMIT 50
  `).all();

  return jsonResponse({
    totalVisitors: totalVisitors.total || 0,
    totalPageViews: totalPageViews.total || 0,
    topLocations: topLocations.results
  });
}

// 按时间查询行程统计（不返回联系方式）
async function handleSearchByTime(request, env, ip) {
  // 检查查询频率限制
  const queryCheck = await checkQueryLimit(ip, env);
  if (!queryCheck.allowed) {
    return jsonResponse({
      error: '查询过于频繁，请稍后再试',
      limit: queryCheck.limit,
      used: queryCheck.used
    }, 429);
  }

  const url = new URL(request.url);
  const date = url.searchParams.get('date');
  const startTime = url.searchParams.get('start_time');
  const endTime = url.searchParams.get('end_time');

  if (!date || !startTime || !endTime) {
    return jsonResponse({ error: '缺少必填参数：date, start_time, end_time' }, 400);
  }

  // 验证日期在三天内
  const queryDate = new Date(`${date}T00:00:00`).getTime();
  const now = Date.now();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayStart = today.getTime();
  const threeDaysLater = todayStart + 3 * 24 * 60 * 60 * 1000;

  if (queryDate < todayStart) {
    return jsonResponse({ error: '只能查询今天及未来三天内的行程' }, 400);
  }

  if (queryDate > threeDaysLater) {
    return jsonResponse({ error: '只能查询三天内的行程' }, 400);
  }

  // 记录查询
  await recordQueryAttempt(ip, env);

  // 解析时间范围
  const startTimestamp = new Date(`${date}T${startTime}:00`).getTime();
  const endTimestamp = new Date(`${date}T${endTime}:00`).getTime();

  if (isNaN(startTimestamp) || isNaN(endTimestamp)) {
    return jsonResponse({ error: '时间格式错误' }, 400);
  }

  // 查询该时间段内的行程
  const trips = await env.DB.prepare(`
    SELECT id, school, campus, departure_location_name, destination_location_name, departure_date, departure_time, departure_timestamp
    FROM trips
    WHERE departure_timestamp BETWEEN ? AND ?
    ORDER BY departure_timestamp
  `).bind(startTimestamp, endTimestamp).all();

  // 统计信息
  const schoolStats = {};
  trips.results.forEach(trip => {
    const schoolKey = trip.campus ? `${trip.school} ${trip.campus}` : trip.school;
    schoolStats[schoolKey] = (schoolStats[schoolKey] || 0) + 1;
  });

  return jsonResponse({
    total: trips.results.length,
    time_range: {
      start: `${date} ${startTime}`,
      end: `${date} ${endTime}`
    },
    school_distribution: schoolStats,
    trips: trips.results.map(t => ({
      school: t.school,
      campus: t.campus,
      departure: t.departure_location_name,
      destination: t.destination_location_name,
      departure_time: `${t.departure_date} ${t.departure_time}`
    }))
  });
}

// 按路线查询行程统计（不返回联系方式）
async function handleSearchByRoute(request, env, ip) {
  // 检查查询频率限制
  const queryCheck = await checkQueryLimit(ip, env);
  if (!queryCheck.allowed) {
    return jsonResponse({
      error: '查询过于频繁，请稍后再试',
      limit: queryCheck.limit,
      used: queryCheck.used
    }, 429);
  }

  const body = await request.json();
  const { start_location, end_location, start_lat, start_lon, end_lat, end_lon, date } = body;

  // 至少需要一个查询条件
  if (!start_location && !end_location) {
    return jsonResponse({ error: '请至少填写出发地或目的地' }, 400);
  }

  // 记录查询
  await recordQueryAttempt(ip, env);

  // 构建查询
  let query = `
    SELECT id, school, campus, departure_location_name, destination_location_name, departure_date, departure_time, departure_timestamp, departure_lat, departure_lon, destination_lat, destination_lon
    FROM trips
    WHERE 1=1
  `;
  let params = [];

  // 如果指定了日期，添加日期过滤
  if (date) {
    const dayStart = new Date(`${date}T00:00:00`).getTime();
    const dayEnd = new Date(`${date}T23:59:59`).getTime();
    query += ` AND departure_timestamp BETWEEN ? AND ?`;
    params.push(dayStart, dayEnd);
  }

  query += ` ORDER BY departure_timestamp`;

  const allTrips = await env.DB.prepare(query).bind(...params).all();

  // 距离筛选和数据处理
  const matchedTrips = [];

  for (const trip of allTrips.results) {
    let matchScore = 0;
    let departureDistance = null;
    let destinationDistance = null;
    let matched = false;

    // 情况1：只填了出发地（有坐标）
    if (start_lat && start_lon && !end_lat && !end_lon) {
      departureDistance = haversineDistance(start_lat, start_lon, trip.departure_lat, trip.departure_lon);
      if (departureDistance <= 1.0) {
        matched = true;
      }
    }
    // 情况2：只填了目的地（有坐标）
    else if (!start_lat && !start_lon && end_lat && end_lon) {
      destinationDistance = haversineDistance(end_lat, end_lon, trip.destination_lat, trip.destination_lon);
      if (destinationDistance <= 1.0) {
        matched = true;
      }
    }
    // 情况3：填了出发地和目的地（都有坐标）
    else if (start_lat && start_lon && end_lat && end_lon) {
      departureDistance = haversineDistance(start_lat, start_lon, trip.departure_lat, trip.departure_lon);
      destinationDistance = haversineDistance(end_lat, end_lon, trip.destination_lat, trip.destination_lon);
      if (departureDistance <= 1.0 && destinationDistance <= 1.0) {
        matched = true;
      }
    }
    // 情况4：使用文本模糊匹配（没有坐标）
    else {
      if (start_location && trip.departure_location_name.includes(start_location)) {
        matchScore++;
      }
      if (end_location && trip.destination_location_name.includes(end_location)) {
        matchScore++;
      }
      if (matchScore > 0) {
        matched = true;
      }
    }

    if (matched) {
      matchedTrips.push({
        ...trip,
        departure_distance: departureDistance ? departureDistance.toFixed(2) : null,
        destination_distance: destinationDistance ? destinationDistance.toFixed(2) : null
      });
    }
  }

  // 按时间段统计
  const timeSlots = {
    '早晨(06:00-09:00)': 0,
    '上午(09:00-12:00)': 0,
    '下午(12:00-18:00)': 0,
    '晚上(18:00-24:00)': 0,
    '深夜(00:00-06:00)': 0
  };

  matchedTrips.forEach(trip => {
    const time = trip.departure_time.split(':')[0];
    const hour = parseInt(time);

    if (hour >= 6 && hour < 9) timeSlots['早晨(06:00-09:00)']++;
    else if (hour >= 9 && hour < 12) timeSlots['上午(09:00-12:00)']++;
    else if (hour >= 12 && hour < 18) timeSlots['下午(12:00-18:00)']++;
    else if (hour >= 18 || hour < 0) timeSlots['晚上(18:00-24:00)']++;
    else timeSlots['深夜(00:00-06:00)']++;
  });

  return jsonResponse({
    total: matchedTrips.length,
    route: {
      start: start_location || '任意地点',
      end: end_location || '任意地点'
    },
    date: date || '所有日期',
    time_distribution: timeSlots,
    trips: matchedTrips.map(t => ({
      school: t.school,
      campus: t.campus,
      departure: t.departure_location_name,
      destination: t.destination_location_name,
      departure_time: `${t.departure_date} ${t.departure_time}`,
      departure_distance: t.departure_distance,
      destination_distance: t.destination_distance
    })),
    summary: `该路线${date ? '当天' : ''}共有 ${matchedTrips.length} 个行程`
  });
}

// 检查匹配频率限制
async function checkMatchLimit(ip, date, env) {
  const limit = await env.DB.prepare(
    'SELECT count FROM match_limits WHERE ip = ? AND date = ?'
  ).bind(ip, date).first();

  const used = limit ? limit.count : 0;

  return {
    allowed: used < MAX_MATCH_PER_DAY,
    limit: MAX_MATCH_PER_DAY,
    used
  };
}

// 记录匹配尝试
async function recordMatchAttempt(ip, date, env) {
  const now = Date.now();

  await env.DB.prepare(`
    INSERT INTO match_limits (ip, date, count, last_match)
    VALUES (?, ?, 1, ?)
    ON CONFLICT(ip, date) DO UPDATE SET
      count = count + 1,
      last_match = ?
  `).bind(ip, date, now, now).run();
}

// 检查查询频率限制
async function checkQueryLimit(ip, env) {
  const now = Date.now();
  const currentMinute = new Date(now).toISOString().slice(0, 16); // YYYY-MM-DDTHH:MM

  const limit = await env.DB.prepare(
    'SELECT count FROM query_limits WHERE ip = ? AND minute = ?'
  ).bind(ip, currentMinute).first();

  const used = limit ? limit.count : 0;

  return {
    allowed: used < MAX_QUERY_PER_MINUTE,
    limit: MAX_QUERY_PER_MINUTE,
    used
  };
}

// 记录查询尝试
async function recordQueryAttempt(ip, env) {
  const now = Date.now();
  const currentMinute = new Date(now).toISOString().slice(0, 16);

  await env.DB.prepare(`
    INSERT INTO query_limits (ip, minute, count, last_query)
    VALUES (?, ?, 1, ?)
    ON CONFLICT(ip, minute) DO UPDATE SET
      count = count + 1,
      last_query = ?
  `).bind(ip, currentMinute, now, now).run();
}

// 清理过期数据
async function handleCleanup(env) {
  const deleted = await cleanupExpiredTrips(env);
  return jsonResponse({ deleted });
}

async function cleanupExpiredTrips(env) {
  const now = Date.now();

  // 清理过期行程
  const tripsResult = await env.DB.prepare(
    'DELETE FROM trips WHERE departure_timestamp < ?'
  ).bind(now).run();

  // 清理过期IP封禁
  const ipBansResult = await env.DB.prepare(
    'DELETE FROM ip_bans WHERE banned_until < ?'
  ).bind(now).run();

  // 清理过期手机号封禁
  const phoneBlacklistResult = await env.DB.prepare(
    'DELETE FROM phone_blacklist WHERE banned_until < ?'
  ).bind(now).run();

  // 清理7天前的发单频率记录
  const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000;
  const tripLimitsResult = await env.DB.prepare(
    'DELETE FROM trip_limits WHERE last_trip < ?'
  ).bind(sevenDaysAgo).run();

  // 清理7天前的匹配频率记录
  const matchLimitsResult = await env.DB.prepare(
    'DELETE FROM match_limits WHERE last_match < ?'
  ).bind(sevenDaysAgo).run();

  // 清理1小时前的查询频率记录
  const oneHourAgo = now - 60 * 60 * 1000;
  const queryLimitsResult = await env.DB.prepare(
    'DELETE FROM query_limits WHERE last_query < ?'
  ).bind(oneHourAgo).run();

  console.log('自动清理完成:', {
    trips: tripsResult.meta.changes,
    ipBans: ipBansResult.meta.changes,
    phoneBlacklist: phoneBlacklistResult.meta.changes,
    tripLimits: tripLimitsResult.meta.changes,
    matchLimits: matchLimitsResult.meta.changes,
    queryLimits: queryLimitsResult.meta.changes
  });

  return {
    trips: tripsResult.meta.changes,
    ipBans: ipBansResult.meta.changes,
    phoneBlacklist: phoneBlacklistResult.meta.changes,
    tripLimits: tripLimitsResult.meta.changes,
    matchLimits: matchLimitsResult.meta.changes,
    queryLimits: queryLimitsResult.meta.changes
  };
}

// Haversine距离计算（单位：km）
function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // 地球半径（km）
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(deg) {
  return deg * (Math.PI / 180);
}

// 地点名称相似度检测（用于匹配同一地点的不同入口）
function isSimilarLocation(name1, name2) {
  // 清理地点名称：去除括号内容、方向词、门等
  const clean = (str) => {
    return str
      .replace(/\(.*?\)/g, '') // 去除括号及内容
      .replace(/（.*?）/g, '') // 去除中文括号
      .replace(/[东南西北]门/g, '') // 去除方向门
      .replace(/[东南西北]区/g, '区') // 统一区名
      .replace(/[东南西北]侧/g, '') // 去除方位
      .replace(/[一二三四五六七八九十\d]+号门/g, '') // 去除几号门
      .replace(/出入口/g, '')
      .replace(/\s+/g, '') // 去除空格
      .trim();
  };

  const cleaned1 = clean(name1);
  const cleaned2 = clean(name2);

  // 完全匹配
  if (cleaned1 === cleaned2) return true;

  // 包含关系（一个是另一个的子串）
  if (cleaned1.includes(cleaned2) || cleaned2.includes(cleaned1)) {
    return true;
  }

  // 计算最长公共子串
  const longestCommonSubstring = (s1, s2) => {
    const m = s1.length;
    const n = s2.length;
    let maxLen = 0;
    let endIndex = 0;
    const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (s1[i - 1] === s2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
          if (dp[i][j] > maxLen) {
            maxLen = dp[i][j];
            endIndex = i;
          }
        }
      }
    }
    return s1.substring(endIndex - maxLen, endIndex);
  };

  const lcs = longestCommonSubstring(cleaned1, cleaned2);
  const minLen = Math.min(cleaned1.length, cleaned2.length);

  // 公共子串长度占较短名称的70%以上
  if (lcs.length >= minLen * 0.7) {
    return true;
  }

  return false;
}

// 智能匹配判断（距离 + 名称相似度）
function isLocationMatch(lat1, lon1, name1, lat2, lon2, name2) {
  const distance = haversineDistance(lat1, lon1, lat2, lon2);
  const nameSimilar = isSimilarLocation(name1, name2);

  // 规则1：距离≤1km，直接匹配
  if (distance <= 1.0) return true;

  // 规则2：距离≤3km 且 名称相似（同一大型场所不同入口）
  if (distance <= 3.0 && nameSimilar) return true;

  return false;
}

// 生成 user_key（用户标识 + 手机号的哈希）
async function generateUserKey(userIdentifier, phone) {
  const text = `${userIdentifier}_${phone}`;
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// 生成地理网格标识（用于限制相同地点发单）
function generateGrid(lat, lon) {
  // 使用0.01度作为网格大小（约1km）
  const gridLat = Math.floor(lat * 100) / 100;
  const gridLon = Math.floor(lon * 100) / 100;
  return `${gridLat},${gridLon}`;
}

// 生成时间段标识（每2小时一个时间段）
function generateTimeSlot(timestamp) {
  const date = new Date(timestamp);
  const hour = date.getHours();
  const slot = Math.floor(hour / 2) * 2;
  return `${slot}-${slot + 2}`;
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  });
}

// 处理图片请求
function handleImage(type) {
  const base64Data = type === 'wechat' ? WECHAT_IMG_BASE64 : ALIPAY_IMG_BASE64;

  // 将base64转换为二进制
  const binaryString = atob(base64Data);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return new Response(bytes, {
    headers: {
      'Content-Type': 'image/jpeg',
      'Cache-Control': 'public, max-age=31536000', // 缓存1年
      'Access-Control-Allow-Origin': '*',
    }
  });
}
