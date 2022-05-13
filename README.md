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
