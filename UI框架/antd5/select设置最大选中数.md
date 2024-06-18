

    ```js
      <FormItem className={[styles.proInput, styles.redDot].join(' ')}>
            {getFieldDecorator('leaders', {
              rules: formLeaderConfig.rules || [],
            })(
              <Select onSearch={searchList}>
                {formLeaderConfigOptions
                  ? formLeaderConfigOptions.map(item => (
                    <Select.Option label={item.name} disabled={getFieldValue('leaders') && getFieldValue('leaders').length === 10 && getFieldValue('leaders').findIndex(i=> i === item.id) === -1} value={item.id} key={item.id}>
                      {item.name}
                    </Select.Option>
                    ))
                  : null}
              </Select>
            )}
          </FormItem>
    ```

    关键 getFieldValue('leaders').findIndex(i=> i === item.id) === -1