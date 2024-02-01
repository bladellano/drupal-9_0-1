<?php

namespace Drupal\form_custom\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

class SimpleCustomForm extends FormBase
{
    public function getFormId()
    {
        // Define o id desse formulário.
        return 'simple_custom_form';
    }

    public function buildForm(array $form, FormStateInterface $form_state)
    {
        // Campo do tipo texto.
        $form['custom_text_field'] = [
            '#type' => 'textfield',
            '#title' => 'Text field:',
            '#required' => TRUE,
        ];

        // Campo do tipo número.
        $form['custom_number_field'] = [
            '#type' => 'number',
            '#title' => 'Number:',
        ];

        // Campo do tipo senha.
        $form['custom_password_field'] = [
            '#type' => 'password',
            '#title' => 'Password',
            '#size' => 25,
        ];

        // Campo do tipo data.
        $form['custom_date_field'] = [
            '#type' => 'date',
            '#title' => 'Date:',
        ];

        // Campo do tipo radio buttons.
        $form['custom_radio_field'] = [
            '#type' => 'radios',
            '#title' => 'Radio buttons:',
            '#options' => [
                'apple' => 'Apple',
                'banana' => 'Banana',
                'orange' => 'Orange',
            ],
        ];

        $form['actions']['submit'] = [
            '#type' => 'submit',
            '#value' => $this->t('Save'),
        ];

        return $form;
    }

    public function validateForm(array &$form, FormStateInterface $form_state)
    {
        // Limit text length to 4.
        $textfield_value = $form_state->getValue('custom_text_field');

        if (strlen($textfield_value) < 4)
            $form_state->setErrorByName('custom_text_field', 'The text input must have at least 4 characters.');

        // Limit maximum number value to 100.
        $number_value = $form_state->getValue('custom_number_field');

        if ($number_value > 100)
            $form_state->setErrorByName('custom_number_field', 'Then number value cannot be greater than 100.');
    }

    public function submitForm(array &$form, FormStateInterface $form_state)
    {
        // Show all form values as status message.
        foreach ($form_state->getValues() as $key => $value) {
            \Drupal::messenger()->addStatus($key . ': ' . $value);
        }

        // Redirect user to the front page.
        $form_state->setRedirect('<front>');
    }
}
