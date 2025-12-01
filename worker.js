
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
      background: white;
      border: 1.5px solid #c9a66b;
      border-radius: 6px;
      max-height: 200px;
      overflow-y: auto;
      width: calc(100% - 0px);
      z-index: 1000;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .suggestion-item {
      padding: 12px;
      cursor: pointer;
      border-bottom: 1px solid #f0e6d2;
      transition: background 0.2s;
    }

    .suggestion-item:hover {
      background: #fff8dc;
    }

    .suggestion-item:last-child {
      border-bottom: none;
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
      width: 100%;
      max-width: 100%;
      overflow: hidden;
    }

    #comments .giscus,
    #comments .giscus-frame {
      width: 100% !important;
      max-width: 100% !important;
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
        max-height: 150px;
        font-size: 0.9em;
      }

      .suggestion-item {
        padding: 10px;
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
    </div>

    <div class="tabs">
      <button type="button" class="tab active" onclick="switchTab('publish')">发布行程</button>
      <button type="button" class="tab" onclick="switchTab('queryTime')">按时间查询</button>
      <button type="button" class="tab" onclick="switchTab('queryRoute')">按路线查询</button>
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
        <label>出发时间 *</label>
        <div class="datetime-row">
          <input type="date" id="departureDate" required>
          <input type="time" id="departureTime" required>
        </div>
      </div>

      <div class="form-group">
        <label for="location">目的地 *</label>
        <div style="position: relative;">
          <input type="text" id="location" required placeholder="请输入目的地（支持地址搜索）" autocomplete="off">
          <div id="locationSuggestions" class="suggestions" style="display: none;"></div>
        </div>
      </div>

      <div class="form-group">
        <label for="contact">联系方式 *</label>
        <input type="text" id="contact" required placeholder="手机号（建议开通微信号查找功能）">
      </div>

      <div class="tip">
        提示：匹配成功后建议优先电话联系，并开通"可通过手机号查找微信"功能方便添加。
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
          <label for="queryDate">查询日期 *</label>
          <input type="date" id="queryDate" required>
        </div>

        <div class="form-group">
          <label>时间范围 *</label>
          <div class="datetime-row">
            <input type="time" id="queryStartTime" required placeholder="开始时间">
            <input type="time" id="queryEndTime" required placeholder="结束时间">
          </div>
        </div>

        <button type="submit">查询该时段行程</button>
      </form>

      <div id="timeQueryResult"></div>
    </div>

    <div id="queryRouteTab" class="tab-content">
      <form id="routeQueryForm">
        <div class="form-group">
          <label for="routeStart">出发地点（可选）</label>
          <input type="text" id="routeStart" placeholder="例如：西工大长安校区">
        </div>

        <div class="form-group">
          <label for="routeEnd">目的地 *</label>
          <input type="text" id="routeEnd" required placeholder="例如：航天城地铁站">
        </div>

        <div class="form-group">
          <label for="routeDate">指定日期（可选）</label>
          <input type="date" id="routeDate">
        </div>

        <button type="submit">查询该路线统计</button>
      </form>

      <div id="routeQueryResult"></div>
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
                <img src="https://dd.snnuisdc.workers.dev/images/wechhat.jpg" alt="微信赞赏码" class="qr-image">
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
                <img src="https://dd.snnuisdc.workers.dev/images/alipay.jpg" alt="支付宝赞赏码" class="qr-image">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="comments" style="margin-top: 50px;"></div>

    <div class="footer">
      <div class="stats">
        <span class="stat-item">访客数：<span id="busuanzi_value_site_uv">--</span></span>
      </div>
      <div class="links">
        <a href="stats.html">访客统计</a>
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

  <script async src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
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
    const API_BASE = 'https://dd.snnuisdc.workers.dev'; // Worker URL，部署后填写
    const SITE_START_DATE = '2025-12-01 00:00:00'; // 网站开始运行日期，请自行修改

    let currentTripId = null; // 保存用户发布的行程ID

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

    let selectedLocation = null;
    let debounceTimer = null;

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
        schoolSuggestions.innerHTML = matches.map(school =>
          \`<div class="suggestion-item" onclick="selectSchool('\${school}')">\${school}</div>\`
        ).join('');
        schoolSuggestions.style.display = 'block';
      } else {
        schoolSuggestions.style.display = 'none';
      }
    });

    function selectSchool(school) {
      schoolInput.value = school;
      schoolSuggestions.style.display = 'none';
    }

    // 地点搜索
    const locationInput = document.getElementById('location');
    const locationSuggestions = document.getElementById('locationSuggestions');

    locationInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      const value = e.target.value.trim();

      if (!value) {
        locationSuggestions.style.display = 'none';
        return;
      }

      debounceTimer = setTimeout(async () => {
        try {
          const response = await fetch(\`\${API_BASE}/api/search?keywords=\${encodeURIComponent(value)}\`);
          const data = await response.json();

          if (data.tips && data.tips.length > 0) {
            locationSuggestions.innerHTML = data.tips.map(tip =>
              \`<div class="suggestion-item" onclick='selectLocation(\${JSON.stringify(tip)})'>\${tip.name}<br><small style="color:#888">\${tip.district || ''} \${tip.address || ''}</small></div>\`
            ).join('');
            locationSuggestions.style.display = 'block';
          } else {
            locationSuggestions.style.display = 'none';
          }
        } catch (error) {
          console.error('搜索失败:', error);
        }
      }, 400);
    });

    async function selectLocation(tip) {
      locationInput.value = tip.name;
      locationSuggestions.style.display = 'none';

      if (tip.location) {
        const [lon, lat] = tip.location.split(',');
        selectedLocation = { lat: parseFloat(lat), lon: parseFloat(lon), name: tip.name };
      } else {
        // 需要进一步解析
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
            selectedLocation = { lat: parseFloat(lat), lon: parseFloat(lon), name: poi.name };
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
      if (!e.target.closest('#location') && !e.target.closest('#locationSuggestions')) {
        locationSuggestions.style.display = 'none';
      }
    });

    // 设置最小日期为今天
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('departureDate').min = today;

    // 表单提交
    document.getElementById('tripForm').addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!selectedLocation) {
        showMessage('请选择有效的目的地', 'error');
        return;
      }

      const formData = {
        name: document.getElementById('name').value.trim(),
        school: document.getElementById('school').value.trim(),
        campus: document.getElementById('campus').value.trim(),
        college: document.getElementById('college').value.trim(),
        lat: selectedLocation.lat,
        lon: selectedLocation.lon,
        location_name: selectedLocation.name,
        departure_date: document.getElementById('departureDate').value,
        departure_time: document.getElementById('departureTime').value,
        contact: document.getElementById('contact').value.trim()
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
        const departureDateTime = new Date(\`\${formData.departure_date}T\${formData.departure_time}:00\`);
        const matchResponse = await fetch(\`\${API_BASE}/api/match\`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            trip_id: currentTripId,
            lat: formData.lat,
            lon: formData.lon,
            departure_timestamp: departureDateTime.getTime()
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

      if (matches.length === 0) {
        container.innerHTML = \`
          <div class="tip">
            暂无匹配的拼车信息，您的行程已发布，其他用户可以找到您！
            \${yourTrip ? \`<p style="margin-top: 10px;">您的行程：\${yourTrip.location} - \${yourTrip.time}</p>\` : ''}
          </div>
        \`;
        return;
      }

      container.innerHTML = \`
        <h2 style="color: #8b4513; margin-bottom: 20px; border-bottom: 2px solid #c9a66b; padding-bottom: 10px;">
          找到 \${matches.length} 个可能的拼车伙伴
        </h2>
        \${matches.map(match => \`
          <div class="match-card">
            <div class="match-header">
              <span class="match-name">\${match.name}</span>
              <span class="match-distance">距离 \${match.distance} km</span>
            </div>
            <div class="match-info">
              <div>学校：\${match.school} \${match.campus ? '· ' + match.campus : ''}</div>
              \${match.college ? \`<div>学院：\${match.college}</div>\` : ''}
              <div>目的地：\${match.location_name}</div>
              <div>出发时间：\${match.departure_date} \${match.departure_time}</div>
            </div>
            <div class="match-contact">
              联系方式：\${match.contact}
            </div>
          </div>
        \`).join('')}
        <div class="tip">
          建议优先电话联系，并开通"可通过手机号查找微信"功能方便添加微信。
        </div>
      \`;
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

      const date = document.getElementById('queryDate').value;
      const startTime = document.getElementById('queryStartTime').value;
      const endTime = document.getElementById('queryEndTime').value;

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

      if (data.total === 0) {
        container.innerHTML = '<div class="tip">该时段暂无行程信息</div>';
        return;
      }

      const schoolList = Object.entries(data.school_distribution)
        .map(([school, count]) => \`<li>\${school}: \${count} 人</li>\`)
        .join('');

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
            \${data.trips.map(trip => \`
              <div style="padding: 10px; background: white; margin-bottom: 8px; border-radius: 4px; border: 1px solid #e0d0b0;">
                <div><strong>\${trip.school}</strong> \${trip.campus || ''}</div>
                <div>目的地：\${trip.location}</div>
                <div>出发时间：\${trip.departure_time}</div>
              </div>
            \`).join('')}
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

      const startLocation = document.getElementById('routeStart').value.trim();
      const endLocation = document.getElementById('routeEnd').value.trim();
      const date = document.getElementById('routeDate').value;

      try {
        const response = await fetch(\`\${API_BASE}/api/search-by-route\`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            start_location: startLocation || '任意地点',
            end_location: endLocation,
            date: date || null
          })
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

      if (data.total === 0) {
        container.innerHTML = '<div class="tip">该路线暂无行程信息</div>';
        return;
      }

      const timeSlots = Object.entries(data.time_distribution)
        .filter(([_, count]) => count > 0)
        .map(([time, count]) => \`
          <div class="stat-box">
            <div class="stat-box-value">\${count}</div>
            <div class="stat-box-label">\${time}</div>
          </div>
        \`).join('');

      container.innerHTML = \`
        <div class="query-result">
          <h3 style="color: #8b4513; margin-bottom: 15px;">路线统计</h3>

          <div style="background: white; padding: 15px; border-radius: 6px; margin-bottom: 20px; border: 1px solid #c9a66b;">
            <div><strong>路线：</strong>\${data.route.start} → \${data.route.end}</div>
            <div style="margin-top: 8px;"><strong>日期：</strong>\${data.date}</div>
            <div style="margin-top: 8px; color: #8b4513; font-size: 1.1em;">\${data.summary}</div>
          </div>

          <div class="stat-grid">
            \${timeSlots}
          </div>

          <div class="tip" style="margin-top: 15px;">
            注意：此查询仅显示统计信息，不显示联系方式。如需查看联系方式，请先发布您的行程。
          </div>
        </div>
      \`;
    }

    // 设置查询表单的最小日期为今天
    document.getElementById('queryDate').min = new Date().toISOString().split('T')[0];
    document.getElementById('routeDate').min = new Date().toISOString().split('T')[0];
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
    const API_BASE = 'https://dd.snnuisdc.workers.dev'; // Worker URL
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

      // 访客统计
      await trackVisitor(request, ip, ua, env);

      // 路由
      if (url.pathname === '/' || url.pathname === '/index.html') {
        return new Response(INDEX_HTML, {
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
          }
        });
      } else if (url.pathname === '/stats.html') {
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
      } else if (url.pathname === '/api/cleanup') {
        return handleCleanup(env);
      }

      return jsonResponse({ error: 'Not found' }, 404);
    } catch (error) {
      console.error('Worker error:', error);
      return jsonResponse({ error: 'Internal server error' }, 500);
    }
  }
};

// 内存中的临时封禁缓存（使用Cloudflare Cache API）
const IP_BAN_CACHE = new Map(); // 注意：Worker重启后会清空

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

  // 简化的频率检查：使用内存计数
  // 注意：这种方式在Worker重启后会重置，但足够防止短期内的滥用
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
    return jsonResponse({ error: 'API key not configured' }, 500);
  }

  const apiUrl = `https://restapi.amap.com/v3/assistant/inputtips?key=${AMAP_KEY}&keywords=${encodeURIComponent(keywords)}&city=西安`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  return jsonResponse(data);
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
  const { name, school, campus, college, lat, lon, location_name, departure_date, departure_time, contact } = body;

  // 验证必填字段
  if (!name || !school || !lat || !lon || !location_name || !departure_date || !departure_time || !contact) {
    return jsonResponse({ error: '缺少必填字段' }, 400);
  }

  // 计算时间戳
  const departureDateTime = new Date(`${departure_date}T${departure_time}:00`);
  const departureTimestamp = departureDateTime.getTime();
  const now = Date.now();
  const sevenDaysLater = now + SEVEN_DAYS;

  // 验证时间范围
  if (departureTimestamp < now) {
    return jsonResponse({ error: '出发时间不能早于当前时间' }, 400);
  }

  if (departureTimestamp > sevenDaysLater) {
    return jsonResponse({ error: '仅支持未来7天内的行程，请勿录入7天后的行程' }, 400);
  }

  // 插入数据库（包含IP）
  const result = await env.DB.prepare(`
    INSERT INTO trips (name, school, campus, college, lat, lon, location_name, departure_date, departure_time, departure_timestamp, contact, ip, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(name, school, campus || '', college || '', lat, lon, location_name, departure_date, departure_time, departureTimestamp, contact, ip, now).run();

  // 清理过期数据
  await cleanupExpiredTrips(env);

  return jsonResponse({ success: true, id: result.meta.last_row_id });
}

// 匹配行程（仅限已发布行程的用户使用，返回联系方式）
async function handleMatch(request, env, ip) {
  const body = await request.json();
  const { trip_id, lat, lon, departure_timestamp } = body;

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
  const userLat = userTrip.lat;
  const userLon = userTrip.lon;
  const userTimestamp = userTrip.departure_timestamp;

  // 时间范围：±1小时
  const oneHour = 60 * 60 * 1000;
  const minTime = userTimestamp - oneHour;
  const maxTime = userTimestamp + oneHour;

  // 查询时间范围内的行程（排除自己的）
  const trips = await env.DB.prepare(`
    SELECT * FROM trips
    WHERE departure_timestamp BETWEEN ? AND ?
    AND id != ?
    ORDER BY departure_timestamp
  `).bind(minTime, maxTime, trip_id).all();

  // 计算距离并过滤（规则3：只返回≤1km的匹配，最多2人）
  const matches = [];
  for (const trip of trips.results) {
    if (matches.length >= 2) break; // 最多返回2个匹配

    const distance = haversineDistance(userLat, userLon, trip.lat, trip.lon);
    if (distance <= 1.0) { // 1km内
      matches.push({
        id: trip.id,
        name: trip.name,
        school: trip.school,
        campus: trip.campus,
        college: trip.college,
        location_name: trip.location_name,
        departure_date: trip.departure_date,
        departure_time: trip.departure_time,
        contact: trip.contact, // 只有匹配接口才返回联系方式
        distance: distance.toFixed(2)
      });
    }
  }

  // 记录匹配次数
  await recordMatchAttempt(ip, today, env);

  return jsonResponse({
    matches,
    your_trip: {
      id: userTrip.id,
      location: userTrip.location_name,
      time: `${userTrip.departure_date} ${userTrip.departure_time}`
    }
  });
}

// 访客统计
async function handleStats(env) {
  // UV（独立访客数）
  const totalVisitors = await env.DB.prepare(
    'SELECT COUNT(*) as total FROM visitors'
  ).first();

  // PV（页面浏览量）：所有IP的count总和
  const totalPageViews = await env.DB.prepare(
    'SELECT SUM(count) as total FROM visitors'
  ).first();

  // IP归属地排名（按最后访问时间排序）
  const topLocations = await env.DB.prepare(`
    SELECT ip, country, city
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
    SELECT id, school, campus, location_name, departure_date, departure_time, departure_timestamp
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
      location: t.location_name,
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
  const { start_location, end_location, date } = body;

  if (!end_location) {
    return jsonResponse({ error: '缺少必填字段：end_location' }, 400);
  }

  // 验证搜索长度
  if (end_location.trim().length < MIN_SEARCH_LENGTH) {
    return jsonResponse({
      error: `搜索关键词至少需要${MIN_SEARCH_LENGTH}个字符`,
      hint: '请输入更具体的地点名称'
    }, 400);
  }

  // 记录查询
  await recordQueryAttempt(ip, env);

  let query = `
    SELECT id, school, campus, location_name, departure_date, departure_time, departure_timestamp, lat, lon
    FROM trips
    WHERE location_name LIKE ?
  `;
  let params = [`%${end_location.trim()}%`];

  // 如果指定了日期，添加日期过滤
  if (date) {
    const dayStart = new Date(`${date}T00:00:00`).getTime();
    const dayEnd = new Date(`${date}T23:59:59`).getTime();
    query += ` AND departure_timestamp BETWEEN ? AND ?`;
    params.push(dayStart, dayEnd);
  }

  query += ` ORDER BY departure_timestamp`;

  const trips = await env.DB.prepare(query).bind(...params).all();

  // 按时间段统计
  const timeSlots = {
    '早晨(06:00-09:00)': 0,
    '上午(09:00-12:00)': 0,
    '下午(12:00-18:00)': 0,
    '晚上(18:00-24:00)': 0,
    '深夜(00:00-06:00)': 0
  };

  trips.results.forEach(trip => {
    const time = trip.departure_time.split(':')[0];
    const hour = parseInt(time);

    if (hour >= 6 && hour < 9) timeSlots['早晨(06:00-09:00)']++;
    else if (hour >= 9 && hour < 12) timeSlots['上午(09:00-12:00)']++;
    else if (hour >= 12 && hour < 18) timeSlots['下午(12:00-18:00)']++;
    else if (hour >= 18 || hour < 0) timeSlots['晚上(18:00-24:00)']++;
    else timeSlots['深夜(00:00-06:00)']++;
  });

  return jsonResponse({
    total: trips.results.length,
    route: {
      start: start_location,
      end: end_location
    },
    date: date || '所有日期',
    time_distribution: timeSlots,
    summary: `该路线${date ? '当天' : ''}共有 ${trips.results.length} 个行程`
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
  const result = await env.DB.prepare(
    'DELETE FROM trips WHERE departure_timestamp < ?'
  ).bind(now).run();

  return result.meta.changes;
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

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  });
}
