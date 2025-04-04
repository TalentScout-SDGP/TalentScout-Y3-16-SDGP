import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time


class TestExplorePlayers(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:5173/explore_players")

    def tearDown(self):
        self.driver.quit()

    # Test case - 1
    def test_page_access_restriction(self):
        """ Test Case to verify Access Restriction to the Explore Players page for users who have not logged in"""
        time.sleep(10)
        Expected_output = "Login to continue"
        restriction = self.driver.find_element(By.XPATH, '/html/body/div[2]/div/div/div/div/div/p[1]')
        self.assertEqual(restriction.text, Expected_output)
        print('TEST 1 PASSED')

    # Test case - 2
    def test_submit_without_selecting_fields(self):
        """ Test Case to verify Error handling when clicking submit button without selecting criteria for Player Exploration"""
        time.sleep(8)
        login_field = self.driver.find_element(By.XPATH, '//*[@id=":r5:"]/div/div/a')
        login_field.click()
        email_field = self.driver.find_element(By.XPATH, '//*[@id="login-email"]')
        email_field.send_keys("qatestuser@gmail.com")

        pas_field = self.driver.find_element(By.XPATH, '//*[@id="login-password"]')
        pas_field.send_keys("talentscout@123")
        time.sleep(5)

        login_button = self.driver.find_element(By.XPATH,
                                                "/html/body/div[1]/div/div[3]/div/div/div[2]/form/div/div[3]/button")
        login_button.click()
        time.sleep(10)

        exp_nav = self.driver.find_element(By.XPATH, '/html/body/div/div/div[2]/div/div[2]/a[2]')
        exp_nav.click()
        time.sleep(2)

        submit_button = self.driver.find_element(By.XPATH, "//button[contains(text(),'Submit')]")
        submit_button.click()

        # Wait for the toast error message to appear
        WebDriverWait(self.driver, 5).until(
            EC.visibility_of_element_located((By.CLASS_NAME, "Toastify__toast-body"))
        )

        # Get the toast error message text
        toast_message = self.driver.find_element(By.CLASS_NAME, "Toastify__toast-body").text

        # Assert that the toast error message matches the expected message
        self.assertEqual(toast_message, "Please select format and playing role.    ")
        print('TEST 2 PASSED')

    # Test case - 3
    def test_format_selection(self):
        """ Test Case to verify ability to select format through select fields"""
        time.sleep(8)
        login_field = self.driver.find_element(By.XPATH, '//*[@id=":r5:"]/div/div/a')
        login_field.click()
        email_field = self.driver.find_element(By.XPATH, '//*[@id="login-email"]')
        email_field.send_keys("qatestuser@gmail.com")

        pas_field = self.driver.find_element(By.XPATH, '//*[@id="login-password"]')
        pas_field.send_keys("talentscout@123")
        time.sleep(5)

        login_button = self.driver.find_element(By.XPATH,
                                                "/html/body/div[1]/div/div[3]/div/div/div[2]/form/div/div[3]/button")
        login_button.click()
        time.sleep(10)

        exp_nav = self.driver.find_element(By.XPATH, '/html/body/div/div/div[2]/div/div[2]/a[2]')
        exp_nav.click()
        time.sleep(5)

        format_select = self.driver.find_element(By.XPATH,
                                                 "/html/body/div/div/div[3]/div/div[1]/div/div/form/div[1]/div[1]/div[2]/select")
        format_select.click()
        test_select = self.driver.find_element(By.XPATH,
                                               "/html/body/div/div/div[3]/div/div[1]/div/div/form/div[1]/div[1]/div[2]/select/option[2]")
        test_select.click()
        time.sleep(2)

        test_select = self.driver.find_element(By.XPATH,
                                               "/html/body/div/div/div[3]/div/div[1]/div/div/form/div[1]/div[1]/div[2]/select/option[2]")
        self.assertEqual(test_select.text, "Test")
        print("TEST 3 PASSED")

    # Test case - 4
    def test_dynamic_batting_selection(self):
        """ Test Case to verify the dynamic generation of Batting style selection when Batsman is selected as the
        Playing Role"""
        time.sleep(8)
        login_field = self.driver.find_element(By.XPATH, '//*[@id=":r5:"]/div/div/a')
        login_field.click()
        email_field = self.driver.find_element(By.XPATH, '//*[@id="login-email"]')
        email_field.send_keys("qatestuser@gmail.com")

        pas_field = self.driver.find_element(By.XPATH, '//*[@id="login-password"]')
        pas_field.send_keys("talentscout@123")
        time.sleep(5)

        login_button = self.driver.find_element(By.XPATH,
                                                "/html/body/div[1]/div/div[3]/div/div/div[2]/form/div/div[3]/button")
        login_button.click()
        time.sleep(10)

        exp_nav = self.driver.find_element(By.XPATH, '/html/body/div/div/div[2]/div/div[2]/a[2]')
        exp_nav.click()
        time.sleep(5)

        format_select = self.driver.find_element(By.XPATH,
                                                 "/html/body/div/div/div[3]/div/div[1]/div/div/form/div[1]/div[1]/div[2]/select")
        format_select.click()
        test_select = self.driver.find_element(By.XPATH,
                                               "/html/body/div/div/div[3]/div/div[1]/div/div/form/div[1]/div[1]/div[2]/select/option[2]")
        test_select.click()
        time.sleep(2)

        play_role = self.driver.find_element(By.XPATH,
                                             "/html/body/div/div/div[3]/div/div[1]/div/div/form/div[1]/div[3]/div[2]/select")
        play_role.click()
        bat_select = self.driver.find_element(By.XPATH,
                                              "/html/body/div/div/div[3]/div/div[1]/div/div/form/div[1]/div[3]/div[2]/select/option[2]")
        bat_select.click()
        time.sleep(2)

        bat_style = self.driver.find_element(By.XPATH,
                                             "/html/body/div/div/div[3]/div/div[1]/div/div/form/div[1]/div[4]/div[1]")
        assert bat_style.is_displayed(), "Element didn't appear after selection"

    # Test case - 5
    def test_dynamic_bowling_selection(self):
        """ Test Case to verify the dynamic generation of Bowling style selection when Batsman is selected as the
        Playing Role"""
        time.sleep(8)
        login_field = self.driver.find_element(By.XPATH, '//*[@id=":r5:"]/div/div/a')
        login_field.click()
        email_field = self.driver.find_element(By.XPATH, '//*[@id="login-email"]')
        email_field.send_keys("qatestuser@gmail.com")

        pas_field = self.driver.find_element(By.XPATH, '//*[@id="login-password"]')
        pas_field.send_keys("talentscout@123")
        time.sleep(5)

        login_button = self.driver.find_element(By.XPATH,
                                                "/html/body/div[1]/div/div[3]/div/div/div[2]/form/div/div[3]/button")
        login_button.click()
        time.sleep(10)

        exp_nav = self.driver.find_element(By.XPATH, '/html/body/div/div/div[2]/div/div[2]/a[2]')
        exp_nav.click()
        time.sleep(5)

        format_select = self.driver.find_element(By.XPATH,
                                                 "/html/body/div/div/div[3]/div/div[1]/div/div/form/div[1]/div[1]/div[2]/select")
        format_select.click()
        test_select = self.driver.find_element(By.XPATH,
                                               "/html/body/div/div/div[3]/div/div[1]/div/div/form/div[1]/div[1]/div[2]/select/option[2]")
        test_select.click()
        time.sleep(2)

        play_role = self.driver.find_element(By.XPATH,
                                             "/html/body/div/div/div[3]/div/div[1]/div/div/form/div[1]/div[3]/div[2]/select")
        play_role.click()
        bowl_select = self.driver.find_element(By.XPATH,
                                               "/html/body/div/div/div[3]/div/div[1]/div/div/form/div[1]/div[3]/div[2]/select/option[3]")
        bowl_select.click()
        time.sleep(2)

        bowl_style = self.driver.find_element(By.XPATH,
                                              "/html/body/div/div/div[3]/div/div[1]/div/div/form/div[1]/div[4]/div[1]")
        assert bowl_style.is_displayed(), "Element didn't appear after selection"

    # Test case - 6
    def test_wicketkeeping_selection(self):
        """ Test Case to verify the wicketkeeper selection"""
        time.sleep(8)
        login_field = self.driver.find_element(By.XPATH, '//*[@id=":r5:"]/div/div/a')
        login_field.click()
        email_field = self.driver.find_element(By.XPATH, '//*[@id="login-email"]')
        email_field.send_keys("qatestuser@gmail.com")

        pas_field = self.driver.find_element(By.XPATH, '//*[@id="login-password"]')
        pas_field.send_keys("talentscout@123")
        time.sleep(5)

        login_button = self.driver.find_element(By.XPATH,
                                                "/html/body/div[1]/div/div[3]/div/div/div[2]/form/div/div[3]/button")
        login_button.click()
        time.sleep(10)

        exp_nav = self.driver.find_element(By.XPATH, '/html/body/div/div/div[2]/div/div[2]/a[2]')
        exp_nav.click()
        time.sleep(5)

        format_select = self.driver.find_element(By.XPATH,
                                                 "/html/body/div/div/div[3]/div/div[1]/div/div/form/div[1]/div[1]/div[2]/select")
        format_select.click()
        test_select = self.driver.find_element(By.XPATH,
                                               "/html/body/div/div/div[3]/div/div[1]/div/div/form/div[1]/div[1]/div[2]/select/option[2]")
        test_select.click()
        time.sleep(2)

        play_role = self.driver.find_element(By.XPATH,
                                             "/html/body/div/div/div[3]/div/div[1]/div/div/form/div[1]/div[3]/div[2]/select")
        play_role.click()
        wk_select = self.driver.find_element(By.XPATH,
                                             "/html/body/div/div/div[3]/div/div[1]/div/div/form/div[1]/div[3]/div[2]/select/option[4]")
        wk_select.click()
        time.sleep(2)

        assert wk_select.is_selected()

    # Test case - 7
    def test_player_ranking_system(self):
        """ Test Case to verify the generation of Ranking system for player Exploration based on selected criteria"""
        time.sleep(8)
        login_field = self.driver.find_element(By.XPATH, '//*[@id=":r5:"]/div/div/a')
        login_field.click()
        email_field = self.driver.find_element(By.XPATH, '//*[@id="login-email"]')
        email_field.send_keys("qatestuser@gmail.com")

        pas_field = self.driver.find_element(By.XPATH, '//*[@id="login-password"]')
        pas_field.send_keys("talentscout@123")
        time.sleep(5)

        login_button = self.driver.find_element(By.XPATH,
                                                "/html/body/div[1]/div/div[3]/div/div/div[2]/form/div/div[3]/button")
        login_button.click()
        time.sleep(10)

        exp_nav = self.driver.find_element(By.XPATH, '/html/body/div/div/div[2]/div/div[2]/a[2]')
        exp_nav.click()
        time.sleep(5)

        format_select = self.driver.find_element(By.XPATH,
                                                 "/html/body/div/div/div[3]/div/div[1]/div/div/form/div[1]/div[1]/div[2]/select")
        format_select.click()
        test_select = self.driver.find_element(By.XPATH,
                                               "/html/body/div/div/div[3]/div/div[1]/div/div/form/div[1]/div[1]/div[2]/select/option[2]")
        test_select.click()
        time.sleep(2)

        play_role = self.driver.find_element(By.XPATH,
                                             "/html/body/div/div/div[3]/div/div[1]/div/div/form/div[1]/div[3]/div[2]/select")
        play_role.click()
        bat_select = self.driver.find_element(By.XPATH,
                                              "/html/body/div/div/div[3]/div/div[1]/div/div/form/div[1]/div[3]/div[2]/select/option[2]")
        bat_select.click()
        time.sleep(2)

        bat_style = self.driver.find_element(By.XPATH,
                                             "/html/body/div/div/div[3]/div/div[1]/div/div/form/div[1]/div[4]/div[2]/select")
        rh_select = self.driver.find_element(By.XPATH,
                                             "/html/body/div/div/div[3]/div/div[1]/div/div/form/div[1]/div[4]/div[2]/select/option[2]")
        rh_select.click()
        time.sleep(2)

        submit_button = self.driver.find_element(By.XPATH, "//button[contains(text(),'Submit')]")
        submit_button.click()
        time.sleep(3)

        ranking_container = self.driver.find_element(By.XPATH, "/html/body/div/div/div[3]/div/div[2]/div")
        assert ranking_container.is_displayed()
        print("TEST 7 PASSED")


if __name__ == "__main__":
    unittest.main()
