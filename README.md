# class 10 Regular expression

### let text = "Hey! this is zoynul abedin";

### let pattern = /zoynul/;

### console.log(pattern.test(text));

### এখানে রেজাল্ট দেখাবে true,

##### -----------------------------------------------------------------------------------------------

## যদি pattern এর /zoynul/i থাকে, তাহলে বুজতে হবে, case insensitive যার অর্থ, capital or small যেকোনো টা হলেই কাজ করবে

##### -----------------------------------------------------------------------------------------------

### let text = "Hey! this is zoynul abedin,Akram, Miraz";

### let pattern = /(zoynul|Akram|Shofiqul)/i;

### (zoynul|Akram|Shofiqul) এর দ্বারা বুজাচ্ছে, উপরের টেক্সট এর মধ্যে zoynul অথবা Akram অথবা Shofiqul আছে নাকি, যদি থাকে তাহলে true দেখাবে না হয় false

### console.log(pattern.test(text));

##### -----------------------------------------------------------------------------------------------

### let text = "zoynul abedin";

### let pattern = /^zoynul abedin$/i; ^( ক্যাপ ) চিহ্ন দিয়ে বুঝায় প্রথম ওয়ার্ড টা ম্যাচিং হতেই হবে, হলেই true, অথবা false | $ (ডলার ) চিহ্ন শেষে দিলে, শেষ ওয়ার্ড টা ম্যাচিং হতেই হবে হলেই true, অথবা false

### console.log(pattern.test(text));

##### -----------------------------------------------------------------------------------------------

### let text = "zaynul abedin";

### let pattern = /^z.ynul$/i; ^( ক্যাপ ) . (ডট) অর্থ হল, যেকনো ক্যারেক্টার ব্যাবহার করা যাবে এই পজিশনে|

### let pattern = /^z._ynul$/i; ^( ক্যাপ ) ._(ডট) এর সাথে ষ্টার ব্যাবহার করলে, ওই পজিশনের ক্যারেক্টার বাদ দেওয়া যেতে পারে, অথবা একাদিক ক্যারেক্টার অ্যাড করা

### console.log(pattern.test(text));

##### -----------------------------------------------------------------------------------------------

### let text = "zaynul abedin";

### let pattern = /^z[a-z]ynul$/i; [a-z] এইটার অর্থ হল, ওয়ার্ড এর এই পজিশনে এসে a-z দেওয়া যাবে, কোনো number, special ক্যারেক্টার ব্যাবহার করা যাবে না,

### let pattern = /^z[a-z0-9]ynul$/i;[a-z] এইটার অর্থ হল, ওয়ার্ড এর এই পজিশনে এসে a-z দেওয়া যাবে,আবার 0-9 দেওয়া

### console.log(pattern.test(text));
