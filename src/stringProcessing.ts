/**
 * 任務：實作一個函式 `toUpperCase`，將輸入的字串轉換為大寫。
 *
 * 範例：
 * toUpperCase("hello") 應該回傳 "HELLO"
 * toUpperCase("world") 應該回傳 "WORLD"
 *
 * @param str - 一個需要被轉換為大寫的字串
 * @returns - 回傳轉換後的大寫字串
 */
export function toUpperCase(str: string): string {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 97 && code <= 122) {
      ans += String.fromCharCode(code - 32);
    } else {
      ans += str[i];
    }
  }
  return ans;
}
