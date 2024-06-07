using UnityEngine;
using UnityEngine.Networking;
using System.Collections;
using System.Collections.Generic;

public class Example : MonoBehaviour
{
    List<int> skinIds = new List<int>();

    void Start()
    {
        //string apiUrl = "http://localhost:8080/getSkins/";
        //StartCoroutine(GetRequest(apiUrl));
    }

    public void getSkinsOfUser(string username)
    {
        string apiUrl = "http://localhost:8080/getSkins/" + username;

        StartCoroutine(GetRequest(apiUrl));


    }

    IEnumerator GetRequest(string uri)
    {
        using (UnityWebRequest webRequest = UnityWebRequest.Get(uri))
        {
            // Request and wait for the desired page.
            yield return webRequest.SendWebRequest();

            string[] pages = uri.Split('/');
            int page = pages.Length - 1;

            switch (webRequest.result)
            {
                case UnityWebRequest.Result.ConnectionError:
                case UnityWebRequest.Result.DataProcessingError:
                    Debug.LogError(pages[page] + ": Error: " + webRequest.error);
                    break;
                case UnityWebRequest.Result.ProtocolError:
                    Debug.LogError(pages[page] + ": HTTP Error: " + webRequest.error);
                    break;
                case UnityWebRequest.Result.Success:
                    Debug.Log(pages[page] + ":\nReceived: " + webRequest.downloadHandler.text);
                    HandleResponse(webRequest.downloadHandler.text);
                 
                    break;
            }
        }
    }

    private void HandleResponse(string jsonResponse)
    {
        
        string currentNumber = "";

        for (int i = 0; i < jsonResponse.Length; i++)
        {
            if (jsonResponse[i] == '"')
            {
                // Found start of a string
                currentNumber = "";

                // Move to next character
                i++;
                while (i < jsonResponse.Length && jsonResponse[i] != '"')
                {
                    // Collect characters until reaching the end of the string
                    currentNumber += jsonResponse[i];
                    i++;
                }

                // After reaching the end of the string, check if it represents an integer
                if (int.TryParse(currentNumber, out int skinId))
                {
                    skinIds.Add(skinId);
                }
            }
        }

        // Log the integer skin IDs
        Debug.Log("Skins: " + string.Join(", ", skinIds));
        
    }


    [System.Serializable]
    private class SkinsWrapper
    {
        public List<string> skins;
    }
    public List<int> GetSkinIds()
    {
        return skinIds;
    }
}
