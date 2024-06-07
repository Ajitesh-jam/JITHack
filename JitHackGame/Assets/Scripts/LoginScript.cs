using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class LoginScript : MonoBehaviour
{
    [SerializeField] private TMP_InputField username_text;
    public int[] skin_ids;
    [SerializeField] private CardDisplay[] cards;
    [SerializeField] private GameObject cardParent;
    [SerializeField] private GameObject LoginCanvas;
    [SerializeField] private GameObject UIParent;
    public Card[] cardSO;
    void Start()
    {
        cardParent.SetActive(false);   
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    public void GetSkin()
    {
        string username = username_text.text;
        DisplayCards();

    }
    public int[] GetIDs()
    {
        return skin_ids;
    }
    private void DisplayCards()
    {
        for (int i = 0; i < 2;i++)
        {
            cards[i].SetCard(cardSO[skin_ids[i]]);
        }
        cardParent.SetActive(true);
    }
    public void CardButtonPressed()
    {
        LoginCanvas.SetActive(false);
        UIParent.SetActive(true);
    }
}
