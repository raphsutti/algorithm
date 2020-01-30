import re
def domain_name(url):
    return re.split('(https?)?(://)?(www\.)?(\.ru)?(\.com.*)?(\.co.*)?',url)[7]
    
'''
Test.assert_equals(domain_name("http://google.com"), "google")
Test.assert_equals(domain_name("http://google.co.jp"), "google")
Test.assert_equals(domain_name("www.xakep.ru"), "xakep")
Test.assert_equals(domain_name("https://youtube.com"), "youtube")
'''
