#  cookie 如何防范xss攻击

## 防御策略

> 对用户输入进行严格的输入验证和过滤，确保只有符合预期格式的数据可以被接受和使用。
> 使用HttpOnly标记来设置cookie，使得cookie只能被服务器访问，而不能通过JavaScript访问。
> 使用Secure标记来设置cookie，确保cookie只能在加密的HTTPS连接下传输。
> 对于包含用户输入内容的cookie，可以对其进行适当的编码和转义，以防止恶意脚本注入。
> 定期更新cookie的值，增加攻击者猜测cookie值的难度。
> 避免在cookie中存储敏感信息，尽量减少cookie中存储的数据量
