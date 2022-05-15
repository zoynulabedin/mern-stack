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

### let pattern = /^z.\_ynul$/i; ^( ক্যাপ ) .\*(ডট) এর সাথে ষ্টার ব্যাবহার করলে, ওই পজিশনের ক্যারেক্টার বাদ দেওয়া যেতে পারে, অথবা একাদিক ক্যারেক্টার অ্যাড করা

### console.log(pattern.test(text));

##### -----------------------------------------------------------------------------------------------

### let text = "zaynul abedin";

### let pattern = /^z[a-z]ynul$/i; [a-z] এইটার অর্থ হল, ওয়ার্ড এর এই পজিশনে এসে a-z দেওয়া যাবে, কোনো number, special ক্যারেক্টার ব্যাবহার করা যাবে না,

### let pattern = /^z[a-zA-Z0-9]ynul$/i;[a-z] এইটার অর্থ হল, ওয়ার্ড এর এই পজিশনে এসে a-z দেওয়া যাবে,A-Z দেওয়া যাবে,আবার 0-9 দেওয়া যাবে

### let pattern = /^z[a-z0-9 @#$%^&*()!~><>]ynul$/i;[a-z] এইটার অর্থ হল, ওয়ার্ড এর এই পজিশনে এসে a-z দেওয়া যাবে,আবার 0-9 দেওয়া যাবে , এখন স্পেচ সহ সকল চিহ্ন দেওয়া যাবে, তাহলে, true return করবে না হলে false return

### let pattern = /^z[a-z0-9 @#$%^&*()!~><>]ynul$\*/i;[a-z] এইটার অর্থ হল, ওয়ার্ড এর এই পজিশনে এসে a-z দেওয়া যাবে,আবার 0-9 দেওয়া যাবে , এখন স্পেচ সহ সকল চিহ্ন দেওয়া যাবে, তাহলে, true return করবে না হলে false return

### let pattern = /^z[a-z0-9 @#$%^&*()!~><>]ynul${3,10}/i;[a-z] এইটার অর্থ হল, ওয়ার্ড এর এই পজিশনে এসে a-z দেওয়া যাবে,আবার 0-9 দেওয়া যাবে , এখন স্পেচ সহ সকল চিহ্ন দেওয়া যাবে, তাহলে, true return করবে না হলে false return | \*ষ্টার বাবহার হয়, আনলিমিটেট ক্যারেক্টার ব্যাবহার করার জন্য , কিন্তু লিমিট করার জন্য {3} , মানে হলো, এক্সাক্ট ৩ টা ক্যারেক্টার ব্যাবহার করতে হবে , আবার {3,} কোমা ব্যাবহার করলে, মিনিমাম ৩ টা ম্যাক্সিমাম যত ইচ্ছা তত । {3,10}, এর মানে হলো , মিনিমাম ৩ এবং ম্যাক্সিমাম ১০

### console.log(pattern.test(text));

##### -----------------------------------------------------------------------------------------------

### let text = "bangladesh";

### let pattern = /^[^a-z]\*$/; এখানে [^a-z] দ্বারা বুজাচ্ছে , a-z ছাড়া বাকি সব ক্যারেক্টার ব্যাবহার করা যাবে

### console.log(pattern.test(text));

##### -----------------------------------------------------------------------------------------------

### let mail = "zoynul@yahoo.com";

### let pattern =/^[a-z0-9]\*@(gmail.com|yahoo.com)$/;দ্বারা বুজাচ্ছে , a-z এবং 0-9 \* ষ্টার দ্বারা সকল ক্যারেক্টার( a-z এবং 0-9 এর মধ্যে ) @ এবং gmail.com|yahoo.com) gmail.com অথবা yahoo.com হবে

### let pattern =/^[a-z0-9]\*@[a-z]{2,}.com$/

### console.log(pattern.test(mail));

# Some Example pattern pattern

## // Create an email pattern

### let email = "trustcodernet@yahoo.com";

### let emailpattern = /^[a-z0-9_]\*@[a-z]{2,}\.[a-z]{2,5}$/;

### console.log(emailpattern.test(email));

## //Create a username pattern

### let user = "trust_coder1";

### let userpattern =/^[a-z0-9_]\*$/;

### console.log(userpattern.test(user));

## // Create a Bangladeshi phone number pattern

### let phoneNumber ="+8801735361634";

### let phoneNumberPattern = /^(\+8801|01)[0-9]{9}$/;

### console.log(phoneNumberPattern.test(phoneNumber));

## // Create a password pattern

### let pasword = "Xy@\_1234";

### let passwordPattern = /^[a-zA-Z0-9#$%&'()\*+,-./:;<=>?@[\]^_`{|}~]{8,16}/i;

### console.log(passwordPattern.test(pasword));

## // Create a zipcode pattern

### let zipcode ="6670";

### let zipcodePattern = /^[0-9]{4}$/;

### console.log(zipcodePattern.test(zipcode));
