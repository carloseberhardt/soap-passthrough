**SOAP pass-through**

This proxy does the following:

1) modifies WSDL to replace target url with proxy url
2) requires wsse:UsernameToken with apikey and secret 
3) removes wsse:UsernameToken before sending request to backend
4) adds a uuid header for tracking purposes on backend