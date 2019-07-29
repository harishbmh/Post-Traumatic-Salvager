Please follow the following instructions to run the Post_Traumatic_Salvager Application. It is written in Python and we need the following packages, kindly install these

1. Run the following as root user in Linux
   wget https://pypi.python.org/packages/source/s/setuptools/setuptools-7.0.tar.gz --no-check-certificate
   Note: For Windows: Install wget for Windows.
	Add the to wget bin directory to your system's path directory. 
	Run cmd.exe to bring up a command prompt.

2. wget https://bootstrap.pypa.io/get-pip.py

3. python get-pip.py

4. pip install flask

5. pip install requests

6. pip install cloudant

7. Extract CFC.tar file to any directory. This can be extracted by any OS user (need not be root user) 
   tar xvf CFC.tar 

8.  Replace the IP Address of Linux machine where you have deployed this Application and the Port on which you want this application to listen in Post_Traumatic_Salvager.py. 
    It is mentioned in the last line which is argument for app.run method.

9. Invoke Python to run the code
   python Post_Traumatic_Salvager.py


10.    You will get the following message on the console

        [hrao@your1 CFC]$ python Post_Traumatic_Salvager.py
         * Serving Flask app "CFC" (lazy loading)
         * Environment: production
          WARNING: This is a development server. Do not use it in a production deployment.
          Use a production WSGI server instead.
        * Debug mode: on
        * Running on http://<IP Address>:<Port>/ (Press CTRL+C to quit)
        * Restarting with stat
        * Debugger is active!
        * Debugger PIN: 176-806-276

11. Access this URL http://<IP Address>:<Port>/index.html on any browser

12. Enter the unique ID in UniqueID field. for ex: 48769d73-450b-4594-b6d9-5cd31f364acc
   and select the info needs to nbe displayed for ex: ADDRESS and then click on get Details

   The information will be displayed in a tabular format.
