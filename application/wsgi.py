# onair Nginx Unit version
version = "0.9.1"
date = "16/02/2024"


import hashlib, json
import processDisplay



def application(env, start_response):
    start_response("200 OK", [("Content-Type",
                               "application/json; charset=utf-8")])
    
    r = {}

    r["agent"] = "NGINX Unit 1.31.1"
    r["Onair Version"] = version + " " + date
    
    r["path"] = {}
    for header in [_ for _ in env.keys() if _.startswith("PATH")]:
        r["path"] = env[header]
        path = env[header].split("/")
        ilight = int(path[2])
        if (ilight >= 0) and (ilight <= processDisplay.MAXLIGHT):
            processDisplay.setStatus(ilight)
        else:
            start_response("400 Bad Request", [("Content-Type",
                               "application/json; charset=utf-8")])
            
    

   
    return json.dumps(r, indent=4).encode("utf-8")

